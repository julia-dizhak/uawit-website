import { PortableText } from '@portabletext/react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'
import Container from '~/components/common/Container'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { urlForImage } from '~/lib/sanity.image'
import { SharedPageProps } from '~/pages/_app'
import { formatDate } from '~/utils'
import { PostType } from '~/lib/sanity.queries/posts/types'
import {
  getPost,
  postBySlugQuery,
  postSlugsQuery,
} from '~/lib/sanity.queries/posts/queries'
import Layout from '../../components/common/Layout'
import { ContactsType } from '~/lib/sanity.queries/settings/types'
import {
  contactsQuery,
  getContacts,
} from '~/lib/sanity.queries/settings/queries'
import { getLogoData, logoQuery } from '~/lib/sanity.queries/logo/queries'
import { LogoType } from '~/lib/sanity.queries/logo/types'

interface Query {
  [key: string]: string
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    post: PostType
    contacts: ContactsType
    logo: LogoType
  },
  Query
> = async ({ draftMode = false, params = {} }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const post = await getPost(client, params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  const contacts = await getContacts(client)
  const logo = await getLogoData(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      post,
      // props for rendering header and footer
      contacts,
      logo,
    },
  }
}

export default function ProjectSlugRoute(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [post] = useLiveQuery(props.post, postBySlugQuery, {
    slug: props.post.slug.current,
  })
  const date = post.date ? post.date : post._createdAt

  const { contacts, logo } = props
  const [contactsData] = useLiveQuery(contacts, contactsQuery)
  const [logoData] = useLiveQuery(logo, logoQuery)

  return (
    <Layout contacts={contactsData} logo={logoData}>
      <div className="bg-white relative rounded-[28px] mt-10">
        <Container className="flex flex-col gap-y-2 md:gap-y-10">
          {post.mainImage && (
            <div className="w-full overflow-hidden lg:h-[440px] sx:-h-[220px] rounded-2xl">
              <Image
                src={urlForImage(post.mainImage)?.url() || ''}
                layout="responsive"
                width={400}
                height={440}
                alt={post.title || 'UA WIT Stockholm'}
                className="rounded-2xl"
              />
            </div>
          )}

          <div className="pb-10">
            <h3 className="text-4xl font-bold leading-10 tracking-tight text-gray-900 text-center">
              {post.title}
            </h3>
          </div>
        </Container>

        <div className="bg-backgroundColorGray">
          <Container>
            <div className="p-10 flex flex-wrap justify-between sm:pt-10p ">
              <div className="text-lg">
                {post.body && <PortableText value={post.body} />}
              </div>

              <div className="pt-10 text-right w-full">
                {post.excerpt && <p>{post.excerpt}</p>}
                <p>{date && formatDate(date)}</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const client = getClient()
  const slugs = await client.fetch(postSlugsQuery)

  return {
    paths: slugs?.map(({ slug }) => `/post/${slug}`) || [],
    fallback: 'blocking',
  }
}

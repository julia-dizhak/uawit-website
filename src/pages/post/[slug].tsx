import { PortableText } from '@portabletext/react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'
import Container from '~/components/common/Container'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
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
import { urlFor } from '~/lib/sanity.imageUrlBuilder'
import Link from 'next/link'
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

  const imageUrl = urlFor(post.mainImage)
    .width(800)
    .height(300)
    .fit('crop')
    .crop('focalpoint') // Use smart crop
    .url()

  const { contacts, logo } = props
  const [contactsData] = useLiveQuery(contacts, contactsQuery)
  const [logoData] = useLiveQuery(logo, logoQuery)

  return (
    <Layout contacts={contactsData} logo={logoData}>
      <div className="bg-white relative rounded-[28px] mt-10">
        <Container className="flex flex-col gap-y-2 md:gap-y-10">
          {post.mainImage && (
            <div className="w-full rounded-2xl text-center">
              <Image
                className="rounded-2xl m-auto"
                src={imageUrl || ''}
                width={800}
                height={300}
                alt={post.title || 'UA WIT Stockholm'}
              />
            </div>
          )}

          <div className="pb-10 text-center">
            <h3 className="pb-10 w-3/4 m-auto text-4xl font-bold leading-10 tracking-tight text-gray-900 ">
              {post.title}
            </h3>
          </div>
        </Container>

        <div className="bg-backgroundColorGray">
          <Container>
            <div className="py-10 px-20 flex flex-wrap justify-between sm:pt-10p ">
              {post.body && (
                <div className="text-lg post-page">
                  {post.body && <PortableText value={post.body} />}
                </div>
              )}

              <div className="pt-10 w-full">
                {post.extraBody && <p>{post.extraBody}</p>}
              </div>

              <div className="pt-10 text-right w-full">
                {date && (
                  <p className="text-sm text-primaryGray">
                    {date && formatDate(date)}
                  </p>
                )}
              </div>

              <div className="text-left py-10">
                <Link
                  href="/"
                  className="text-primaryBlue border-primaryBlue px-4 text-sm border py-[16px] text-center rounded-xl
   hover:scale-[1.01] hover:shadow-md transition-all duration-300
  active:scale-[0.96] active:duration-300"
                >
                  &larr; &nbsp; Return to home page
                </Link>
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

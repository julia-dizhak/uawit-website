import { PortableText } from '@portabletext/react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'

import Container from '~/components/Container'
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

interface Query {
  [key: string]: string
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    post: PostType
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

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      post,
    },
  }
}

export default function ProjectSlugRoute(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [post] = useLiveQuery(props.post, postBySlugQuery, {
    slug: props.post.slug.current,
  })

  return (
    <Container>
      <section className="m-2">
        {post.mainImage ? (
          <Image
            className="object-fill h-200[px]"
            src={urlForImage(post.mainImage)?.url() || ''}
            height={231}
            width={367}
            alt=""
          />
        ) : (
          <div className="bg-black" />
        )}
        <div className="p-4 mt-2">
          <h1 className="m-4 font-bold">{post.title}</h1>
          <p>{post.excerpt}</p>
          <p>{post._createdAt && formatDate(post._createdAt)}</p>
          <div>{post.body && <PortableText value={post.body} />}</div>
        </div>
      </section>
    </Container>
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

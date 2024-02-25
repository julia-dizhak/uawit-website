import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import { Fragment } from 'react'

import Card from '~/components/Card'
import Container from '~/components/Container'
import ContentSection from '~/components/ContentSection'
import Welcome from '~/components/Welcome'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import {
  getPosts,
  type Post,
  postsQuery,
  EventsListType,
  getEvents,
  eventsQuery,
  EventType
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
    events: EventType[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)
  const events = await getEvents(client)
  console.log('First event', events)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
      events,
    },
  }
}

export default function HomePage({
  posts,
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [postsArray] = useLiveQuery<Post[]>(posts, postsQuery)
  const [eventsData] = useLiveQuery(events, eventsQuery)
  console.log(eventsData)

  return (
    <Container>
      <section>
        {postsArray.length ? (
          postsArray.map((post) => <Card key={post._id} post={post} />)
        ) : (
          <Welcome />
        )}
      </section>
      {eventsData.length && <ContentSection events={eventsData} />}
    </Container>
  )
}

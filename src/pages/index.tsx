import { type GetStaticProps, type InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Navigation from '~/components/Navigation'
import Hero from '~/components/Hero'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import type { SharedPageProps } from '~/pages/_app'
import { Posts } from '~/components/Posts'
import NoData from '~/components/NoData'
import { getLogoData, logoQuery } from '~/lib/sanity.queries/logo/queries'
import { type LogoType } from '~/lib/sanity.queries/logo/types'
import { type HeroType } from '~/lib/sanity.queries/hero/types'
import { getHeroData, heroQuery } from '~/lib/sanity.queries/hero/queries'
import { type PostsType } from '~/lib/sanity.queries/posts/types'
import { getPosts, postsQuery } from '~/lib/sanity.queries/posts/queries'
import { eventsQuery, getEvents } from '~/lib/sanity.queries/events/queries'
import { type EventsListType } from '~/lib/sanity.queries/events/types'
import { getNavbarData, navbarQuery } from '~/lib/sanity.queries/navbar/queries'
import { type NavigationType } from '~/lib/sanity.queries/navbar/types'
import { type Partner } from '~/lib/sanity.queries/partners/types'
import EventsSection from '~/components/eventsSection/EventSection'
import {
  getPartnersData,
  partnersQuery,
} from '~/lib/sanity.queries/partners/queries'
import { Partners } from '~/components/Partners'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: PostsType
    navbarData: NavigationType
    logoData: LogoType
    heroData: HeroType
    events: EventsListType
    partners: Partner[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const navbarData = await getNavbarData(client)
  const heroData = await getHeroData(client)
  const logoData = await getLogoData(client)
  const posts = await getPosts(client) // or news
  const events = await getEvents(client)
  const partners = await getPartnersData(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      // fetched data from schema
      posts,
      events,
      logoData,
      heroData,
      navbarData,
      partners,
    },
  }
}

export default function HomePage({
  posts,
  navbarData,
  heroData,
  logoData,
  events,
  partners,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [postsData] = useLiveQuery<PostsType>(posts, postsQuery)
  const [navbar] = useLiveQuery(navbarData, navbarQuery)

  const [hero] = useLiveQuery(heroData, heroQuery)
  const { backgroundImage, description, title, buttonName } = hero

  const [logo] = useLiveQuery(logoData, logoQuery)
  const [eventsData] = useLiveQuery(events, eventsQuery)

  const [partnersData] = useLiveQuery(partners, partnersQuery)

  const dataShouldBePresent = postsData.length > 0 || events.length

  return (
    <>
      {dataShouldBePresent ? (
        <>
          {(navbar || logo) && <Navigation logo={logo} navbar={navbar} />}
          {hero && (
            <Hero
              backgroundImage={backgroundImage}
              description={description}
              title={title}
              buttonName={buttonName}
            />
          )}
          {postsData.length > 0 && <Posts posts={postsData} />}
          {eventsData.length > 0 && <EventsSection events={eventsData} />}
          {partnersData.length > 0 && <Partners partners={partnersData} />}
        </>
      ) : (
        <NoData />
      )}
    </>
  )
}

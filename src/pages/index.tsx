import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Navigation from '~/components/Navigation'
import ContentSection from '~/components/ContentSection'
import Hero from '~/components/Hero'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import type { SharedPageProps } from '~/pages/_app'
import { Posts } from '~/components/Posts'
import About from '~/components/About'
import NoData from '~/components/NoData'
import { getLogoData, logoQuery } from '~/lib/sanity.queries/logo/queries'
import { LogoType } from '~/lib/sanity.queries/logo/types'
import { HeroType } from '~/lib/sanity.queries/hero/types'
import { getHeroData, heroQuery } from '~/lib/sanity.queries/hero/queries'
import { PostsType } from '~/lib/sanity.queries/posts/types'
import { getPosts, postsQuery } from '~/lib/sanity.queries/posts/queries'
import { eventsQuery, getEvents } from '~/lib/sanity.queries/events/queries'
import { EventsListType } from '~/lib/sanity.queries/events/types'
import { getNavbarData, navbarQuery } from '~/lib/sanity.queries/navbar/queries'
import { NavigationType } from '~/lib/sanity.queries/navbar/types'
import { AboutType } from '~/lib/sanity.queries/about/types'
import { getAbout, aboutQuery } from '~/lib/sanity.queries/about/queries'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: PostsType
    navbarData: NavigationType
    logoData: LogoType
    heroData: HeroType
    events: EventsListType
    about: AboutType
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const navbarData = await getNavbarData(client)
  const heroData = await getHeroData(client)
  const logoData = await getLogoData(client)
  const posts = await getPosts(client) // or news
  const events = await getEvents(client)
  const about = await getAbout(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      // fetched data
      posts,
      events,
      logoData,
      heroData,
      navbarData,
      about,
    },
  }
}

export default function HomePage({
  posts,
  navbarData,
  heroData,
  logoData,
  events,
  about,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [postsData] = useLiveQuery<PostsType>(posts, postsQuery)
  const [navbar] = useLiveQuery(navbarData, navbarQuery)

  const [hero] = useLiveQuery(heroData, heroQuery)
  const { backgroundImage, description, title, buttonName } = hero

  const [logo] = useLiveQuery(logoData, logoQuery)
  const [eventsData] = useLiveQuery(events, eventsQuery)

  const [aboutData] = useLiveQuery(about, aboutQuery)

  const dataShouldBePresent = postsData.length || events.length

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
          {aboutData && <About about={aboutData} />}
          {postsData.length && <Posts posts={postsData} />}
          {eventsData.length && <ContentSection events={eventsData} />}
        </>
      ) : (
        <NoData />
      )}
    </>
  )
}

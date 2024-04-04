import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Hero from '~/components/Hero'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { Posts } from '~/components/Posts'
import About from '~/components/About'
import NoData from '~/components/NoData'
import { getLogoData, logoQuery } from '~/lib/sanity.queries/logo/queries'
import { LogoType } from '~/lib/sanity.queries/logo/types'
import { HeroType } from '~/lib/sanity.queries/hero/types'
import { getHeroData, heroQuery } from '~/lib/sanity.queries/hero/queries'
import { PostType, PostsType } from '~/lib/sanity.queries/posts/types'
import { getPosts, postsQuery } from '~/lib/sanity.queries/posts/queries'
import { eventsQuery, getEvents } from '~/lib/sanity.queries/events/queries'
import { EventsListType } from '~/lib/sanity.queries/events/types'
import { getNavbarData, navbarQuery } from '~/lib/sanity.queries/navbar/queries'
import { NavigationType } from '~/lib/sanity.queries/navbar/types'
import { AboutType } from '~/lib/sanity.queries/about/types'
import { getAbout, aboutQuery } from '~/lib/sanity.queries/about/queries'
import EventsSection from '~/components/eventsSection/EventSection'
import {
  getPartnersData,
  partnersQuery,
} from '~/lib/sanity.queries/partners/queries'
import { SharedPageProps } from './_app'
import { Partner } from '~/lib/sanity.queries/partners/types'
import { Footer } from '~/components/Footer'
import { ContactType } from '~/lib/sanity.queries/general/types'
import { getContact, contactQuery } from '~/lib/sanity.queries/general/queries'
import {
  eventsSectionQuery,
  getEventsSectionData,
} from '~/lib/sanity.queries/eventsSection/queries'
import { EventsSectionType } from '~/lib/sanity.queries/eventsSection/types'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: PostType[]
    navbarData: NavigationType
    logoData: LogoType
    heroData: HeroType
    eventsData: EventsListType
    eventsSectionData: EventsSectionType
    about: AboutType
    partners: Partner[]
    contacts: ContactType
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const navbarData = await getNavbarData(client)
  const heroData = await getHeroData(client)
  const logoData = await getLogoData(client)
  const posts = await getPosts(client) // or news
  const eventsData = await getEvents(client)
  const eventsSectionData = await getEventsSectionData(client)
  const about = await getAbout(client)
  const partners = await getPartnersData(client)
  const contacts = await getContact(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      // fetched data from sanity
      posts,
      eventsData,
      eventsSectionData,
      logoData,
      heroData,
      navbarData,
      about,
      partners,
      contacts,
    },
  }
}

export default function HomePage({
  posts,
  navbarData,
  heroData,
  logoData,
  eventsData,
  about,
  partners,
  contacts,
  eventsSectionData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [postsData] = useLiveQuery<PostsType>(posts, postsQuery)
  const [navbar] = useLiveQuery(navbarData, navbarQuery)

  const [hero] = useLiveQuery(heroData, heroQuery)
  const { backgroundImage, description, title, fontColor } = hero

  const [logo] = useLiveQuery(logoData, logoQuery)
  const [events] = useLiveQuery(eventsData, eventsQuery)
  const [eventsSection] = useLiveQuery(eventsSectionData, eventsSectionQuery)
  const [aboutData] = useLiveQuery(about, aboutQuery)
  const [partnersData] = useLiveQuery(partners, partnersQuery)

  const dataShouldBePresent = postsData.length > 0 || events.length

  const [contactsData] = useLiveQuery(contacts, contactQuery)

  return (
    <>
      {dataShouldBePresent ? (
        <>
          {hero && (
            <Hero
              backgroundImage={backgroundImage}
              description={description}
              title={title}
              fontColor={fontColor}
              navbar={navbar}
              logo={logo}
            />
          )}
          {aboutData && <About about={aboutData} partnersData={partnersData} />}

          {postsData.length > 0 && <Posts posts={postsData} />}
          {events.length > 0 && (
            <EventsSection
              events={eventsData}
              section={eventsSection}
              contacts={contactsData}
            />
          )}

          <Footer logo={logo} contacts={contactsData} />
        </>
      ) : (
        <NoData />
      )}
    </>
  )
}

import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Hero from '~/components/Hero'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { Posts } from '~/components/Posts'
import About from '~/components/About'
import NoData from '~/components/NoData'
import { Widget } from '~/components/Widget'
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
import { WidgetType } from '~/lib/sanity.queries/widgets/types'
import { getWidgetData, widgetQuery } from '~/lib/sanity.queries/widgets/queries'
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
  widget: WidgetType
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
  const widget = await getWidgetData(client)

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
      widget,
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
                                   widget,
                                 }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [postsData] = useLiveQuery<PostsType>(posts, postsQuery)
  const [navbar] = useLiveQuery(navbarData, navbarQuery)
  const [hero] = useLiveQuery(heroData, heroQuery)
  const [logo] = useLiveQuery(logoData, logoQuery)
  const [events] = useLiveQuery(eventsData, eventsQuery)
  const [eventsSection] = useLiveQuery(eventsSectionData, eventsSectionQuery)
  const [aboutData] = useLiveQuery(about, aboutQuery)
  const [partnersData] = useLiveQuery(partners, partnersQuery)
  const [contactsData] = useLiveQuery(contacts, contactQuery)
  const [widgetData] = useLiveQuery(widget, widgetQuery)

  const dataShouldBePresent = aboutData && postsData.length > 0

  return (
    <>
      {dataShouldBePresent ? (
        <>
          {hero && <Hero hero={hero} navbar={navbar} logo={logo} />}
          {aboutData && <About about={aboutData} partnersData={partnersData} />}
          {postsData.length > 0 && <Posts posts={postsData} />}
          {events.length > 0 && (
            <EventsSection
              events={eventsData}
              section={eventsSection}
              contacts={contactsData}
            />
          )}
          {widgetData && <Widget widget={widgetData} />}

          {contactsData && <Footer logo={logo} contacts={contactsData} />}
        </>
      ) : (
        <NoData />
      )}
    </>
  )
}

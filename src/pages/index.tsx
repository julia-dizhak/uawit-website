import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Hero from '~/components/Hero'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { Posts } from '~/components/posts/Posts'
import NoData from '~/components/common/NoData'
import { getLogoData, logoQuery } from '~/lib/sanity.queries/logo/queries'
import { LogoType } from '~/lib/sanity.queries/logo/types'
import { HeroType } from '~/lib/sanity.queries/hero/types'
import { getHeroData, heroQuery } from '~/lib/sanity.queries/hero/queries'
import { PostType, PostsType } from '~/lib/sanity.queries/posts/types'
import { getPosts, postsQuery } from '~/lib/sanity.queries/posts/queries'
import { eventsQuery, getEvents } from '~/lib/sanity.queries/events/queries'
import { EventsListType } from '~/lib/sanity.queries/events/types'
import { AboutType } from '~/lib/sanity.queries/about/types'
import { getAbout, aboutQuery } from '~/lib/sanity.queries/about/queries'
import EventsSection from '~/components/events/EventsSection'
import {
  getPartnersData,
  partnersQuery,
} from '~/lib/sanity.queries/partners/queries'
import { SharedPageProps } from './_app'
import { Partner } from '~/lib/sanity.queries/partners/types'
import { Footer } from '~/components/Footer'
import { Contact } from '~/components/Contact'
import { ContactsType } from '~/lib/sanity.queries/settings/types'
import {
  contactsQuery,
  getContacts,
} from '~/lib/sanity.queries/settings/queries'
import {
  eventsSectionQuery,
  getEventsSectionData,
} from '~/lib/sanity.queries/eventsSection/queries'
import { EventsSectionType } from '~/lib/sanity.queries/eventsSection/types'
import SendMessageSection from '~/components/SendMessageSection'
import { SendMessageType } from '~/lib/sanity.queries/sendMessage/types'
import {
  getSendMessageData,
  sendMessageQuery,
} from '~/lib/sanity.queries/sendMessage/queries'
import FakeWidget from '~/components/FakeWidget'
import AboutUs from '~/components/AboutUs'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    postsData: PostType[]
    logoData: LogoType
    heroData: HeroType
    aboutData: AboutType
    partnersData: Partner[]
    sendMessageData: SendMessageType
    eventsData: EventsListType
    eventsSectionData: EventsSectionType
    contacts: ContactsType
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const heroData = await getHeroData(client)
  const logoData = await getLogoData(client)
  const postsData = await getPosts(client) // or news
  const aboutData = await getAbout(client)
  const partnersData = await getPartnersData(client)
  const sendMessageData = await getSendMessageData(client)
  const eventsSectionData = await getEventsSectionData(client)
  const eventsData = await getEvents(client)
  const contacts = await getContacts(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      // fetched data from sanity
      postsData,
      logoData,
      heroData,
      aboutData,
      partnersData,
      sendMessageData,
      eventsSectionData,
      eventsData,
      contacts,
    },
  }
}

export default function HomePage({
  postsData,
  heroData,
  logoData,
  aboutData,
  partnersData,
  sendMessageData,
  eventsSectionData,
  eventsData,
  contacts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [posts] = useLiveQuery<PostsType>(postsData, postsQuery)
  const [hero] = useLiveQuery(heroData, heroQuery)
  const [logo] = useLiveQuery(logoData, logoQuery)
  const [about] = useLiveQuery(aboutData, aboutQuery)
  const [partners] = useLiveQuery(partnersData, partnersQuery)
  const [sendMessage] = useLiveQuery(sendMessageData, sendMessageQuery)
  const [events] = useLiveQuery(eventsData, eventsQuery)
  const [eventsSection] = useLiveQuery(eventsSectionData, eventsSectionQuery)
  const [contactsData] = useLiveQuery(contacts, contactsQuery)

  const dataShouldBePresent = aboutData && postsData.length > 0

  const { email } = contactsData

  return (
    <>
      {dataShouldBePresent ? (
        <>
          {hero && contactsData && (
            <Hero hero={hero} linkedIn={contactsData.linkedIn} logo={logo} />
          )}
          {about && partners && <AboutUs about={about} partners={partners} />}
          <FakeWidget />
          {posts.length > 0 && <Posts posts={posts} />}
          {sendMessage && contactsData && (
            <SendMessageSection
              sendMessage={sendMessageData}
              email={contactsData.email}
            />
          )}
          {eventsSection && events.length > 0 && (
            <EventsSection events={events} section={eventsSection} />
          )}
          {email && <Contact email={email} />}
          {contactsData && (
            <Footer logo={logo} contacts={contactsData} showNavigation={true} />
          )}
        </>
      ) : (
        <NoData />
      )}
    </>
  )
}

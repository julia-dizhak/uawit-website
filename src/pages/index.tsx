import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useLiveQuery } from 'next-sanity/preview';
import Navigation from '~/components/Navigation';
import ContentSection from '~/components/ContentSection';
import Hero from '~/components/Hero';
import { readToken } from '~/lib/sanity.api';
import { getClient } from '~/lib/sanity.client';
import {
  navbarQuery,
  getNavbarData,
  getHeroData,
  heroQuery,
  logoQuery,
  getLogoData
} from '~/lib/sanity.queries';
import {
  HeroType,
  LogoType,
  NavigationType,
  PostsType,
  EventsListType,
  EventType
} from '~/lib/sanity.interfaces';
import {
  getPosts,
  postsQuery,
  getEvents,
  eventsQuery
} from '~/lib/sanity.queries';
import type { SharedPageProps } from '~/pages/_app';
import { Posts } from '~/components/Posts';
import NoData from '~/components/NoData';

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: PostsType;
    navbarData: NavigationType;
    logoData: LogoType;
    heroData: HeroType;
    events: EventType[];
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined);
  const navbarData = await getNavbarData(client);
  const heroData = await getHeroData(client);
  const logoData = await getLogoData(client);
  const posts = await getPosts(client);
  const events = await getEvents(client);

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      // data
      posts,
      events,
      logoData,
      heroData,
      navbarData
    }
  };
};

export default function HomePage({
  posts,
  navbarData,
  heroData,
  logoData,
  events
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [postsData] = useLiveQuery<PostsType>(posts, postsQuery);

  const [navbarArray] = useLiveQuery(navbarData, navbarQuery);
  const navbar = navbarArray?.[0] || {};

  const [heroArray] = useLiveQuery(heroData, heroQuery);
  const hero = heroArray?.[0] || {};

  const [logoArray] = useLiveQuery(logoData, logoQuery);
  const logo = logoArray?.[0] || {};

  const [eventsData] = useLiveQuery(events, eventsQuery);

  const { backgroundImage, description, title, buttonName } = hero;

  const dataShouldBePresent = postsData.length;

  return (
    <>
      {dataShouldBePresent ? (
        <>
          <Navigation logo={logo} navbar={navbar} />
          <Hero
            backgroundImage={backgroundImage}
            description={description}
            title={title}
            buttonName={buttonName}
          />
          <Posts posts={postsData} />
          {eventsData.length && <ContentSection events={eventsData} />}
        </>
      ) : (
        <NoData />
      )}
    </>
  );
}

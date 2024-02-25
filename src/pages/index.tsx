import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Navigation from '~/components/Navigation'
import Hero from '~/components/Hero'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import {
  getPosts,
  postsQuery,
  navbarQuery,
  getNavbarData,
  getHeroData,
  heroQuery,
  logoQuery,
  getLogoData,
} from '~/lib/sanity.queries'
import { HeroType, LogoType, NavigationType, PostsType } from '~/lib/sanity.interfaces'
import type { SharedPageProps } from '~/pages/_app'
import { Posts } from '~/components/Posts'
import NoData from '~/components/NoData'

export default function HomePage({
  posts,
  navbarData,
  heroData,
  logoData
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [postsData] = useLiveQuery<PostsType>(posts, postsQuery)
  
  const [navbarArray] = useLiveQuery(navbarData, navbarQuery)
  const navbar = navbarArray?.[0] || {};

  const [heroArray] = useLiveQuery(heroData, heroQuery)
  const hero = heroArray?.[0] || {}

  const [logoArray] = useLiveQuery(logoData, logoQuery);
  const logo = logoArray?.[0] || {}

  const { backgroundImage, description, title, buttonName } = hero;

  const dataShouldBePresent = postsData.length;

  return (
    <>
        {dataShouldBePresent ? (
          <>
            <Navigation
              logo={logo}
              navbar={navbar}
            />
            <Hero backgroundImage={backgroundImage} description={description} title={title} buttonName={buttonName} />
            <Posts posts={postsData} />
          </>
        ) : (
          <NoData />
        )}
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: PostsType,
    navbarData: NavigationType,
    logoData: LogoType,
    heroData: HeroType
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const navbarData = await getNavbarData(client)
  const heroData = await getHeroData(client);
  const logoData = await getLogoData(client);
  const posts = await getPosts(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      // data
      posts,
      navbarData,
      heroData,
      logoData
    },
  }
}
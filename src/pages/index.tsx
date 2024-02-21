import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Card from '~/components/Card'
import Navigation from '~/components/Navigation'
import Hero from '~/components/Hero'
import Welcome from '~/components/Welcome'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import {
  getPosts,
  type Post,
  postsQuery,
  navbarQuery,
  getNavbarData,
  getHeroData,
  heroQuery,
} from '~/lib/sanity.queries'
import { NavigationI } from '~/lib/interfaces'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
    navbarItems: NavigationI[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)
  const navbarItems = await getNavbarData(client)
  const heroItems = await getHeroData(client)
  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
      navbarItems,
      heroItems
    },
  }
}

export default function HomePage({
  posts,
  navbarItems,
  heroItems,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [postsData] = useLiveQuery<Post[]>(posts, postsQuery)
  const [navbarItemsData] = useLiveQuery(navbarItems, navbarQuery)
  const [heroItemsData] = useLiveQuery(heroItems, heroQuery)

  const navbarItem = navbarItemsData?.[0] || {}
  const heroData = heroItemsData?.[0] || {}


  return (
    <>
      <Navigation
        buttonName={navbarItem.buttonName}
        items={navbarItem.items}
        logo={navbarItem.logo}
        languages={navbarItem.languages}
      />
      <Hero backgroundImage={heroData.backgroundImage} description={heroData.description} title={heroData.title} buttonName={heroData.buttonName} />
      <section>
        {postsData.length ? (
          postsData.map((post) => <Card key={post._id} post={post} />)
        ) : (
            <Welcome />
          )}
      </section>
    </>
  )
}

import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import { metadata as studioMetadata } from 'next-sanity/studio'
import config from 'sanity.config'

export default function StudioPage() {
  return (
    <>
      <Head>
        {Object.entries(studioMetadata).map(([key, value]) => (
          <>
            <meta key={key} name={key} content={value} />
          </>
        ))}
      </Head>

      <NextStudio config={config} unstable_globalStyles />
    </>
  )
}

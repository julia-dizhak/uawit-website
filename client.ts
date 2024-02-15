import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '2yvnv4eu', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})

export default client;
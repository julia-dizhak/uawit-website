import { createClient, type SanityClient }  from '@sanity/client'

const SANITY_PROJECT_ID = '2yvnv4eu';
const SANITY_DATASET = 'production';

export function getClient(): SanityClient {
  const client = createClient({
    projectId: SANITY_PROJECT_ID, // you can find this in sanity.json
    dataset: SANITY_DATASET, // or the name you chose in step 1
    useCdn: true // `false` if you want to ensure fresh data
  });

  return client
}

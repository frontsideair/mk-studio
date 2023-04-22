import FeaturedRow from '@components/modules/FeaturedRow'
import { initializeApollo } from '@framework/client'
import CLIENTS_QUERY from '@framework/data/queries/CLIENTS_QUERY'

// export const dynamic = 'force-dynamic'
const getClients = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: CLIENTS_QUERY,
  })
  console.log('data', data)
  return data?.clients
}

export default async function FeaturedClients() {
  const clients = await getClients()
  console.log('clients', clients)

  const images = clients?.map((client) => client.logo)

  return <FeaturedRow title="Clients We've Helped" images={images} />
}

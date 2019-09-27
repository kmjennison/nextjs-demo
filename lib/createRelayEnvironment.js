// import { Environment, Network, RecordSource, Store } from 'relay-runtime'

import { Network, RecordSource } from 'relay-runtime'
import { Store, Environment } from 'react-relay-offline'

// import { Network } from 'relay-runtime'
// import { Store, Environment, RecordSource } from 'react-relay-offline'

// import { Network, RecordSource } from 'relay-runtime'
// import EnvironmentIDB from 'react-relay-offline/lib/runtime/EnvironmentIDB'

import fetch from 'isomorphic-unfetch'

let relayEnvironment = null

// TODO: support offline:
// https://github.com/morrys/react-relay-offline

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(operation, variables, cacheConfig, uploadables) {
  console.log('calling fetchQuery')
  const endpoint =
    'https://api.graph.cool/relay/v1/next-js-with-relay-modern-example'
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }, // Add authentication and other headers here
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then(response => response.json())
}

export default function initEnvironment({ records = {} } = {}) {
  const createEnvironment = () => {
    // Create a network layer from the fetch function
    const network = Network.create(fetchQuery)

    // original
    const store = new Store(new RecordSource(records))
    return new Environment({
      network,
      store,
    })

    // new
    // const offlineOptions = {}
    // const store = new Store(new RecordSource(records))
    // return new Environment(
    //   {
    //     network,
    //     store,
    //   },
    //   offlineOptions
    // )

    // new IDB
    // const offlineOptions = {}
    // return EnvironmentIDB.create({ network }, offlineOptions)
  }

  // Make sure to create a new Relay environment for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return createEnvironment()
  }

  // reuse Relay environment on client-side
  if (!relayEnvironment) {
    relayEnvironment = createEnvironment()
  }

  return relayEnvironment
}

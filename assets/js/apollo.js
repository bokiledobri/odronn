import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
    uri: '/api'
})

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { JsonplaceholderPostApi } from './datasources/jsonplaceholder-post'
import { JsonplaceholderUserApi } from './datasources/jsonplaceholder-use'
import { resolvers } from './resolver'
import { typeDefs } from './schema'

interface ContextValue {
  dataSources: {
    jsonplaceholderUserApi: JsonplaceholderUserApi
    jsonplaceholderPostApi: JsonplaceholderPostApi
  }
}

const server = new ApolloServer<ContextValue>({
  resolvers,
  typeDefs,
})

export default startServerAndCreateNextHandler(server, {
  context: async () => {
    return {
      dataSources: {
        jsonplaceholderUserApi: new JsonplaceholderUserApi(),
        jsonplaceholderPostApi: new JsonplaceholderPostApi(),
      },
    }
  },
})

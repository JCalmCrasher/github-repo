import Vue from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import store from './store';
import {
  createProvider
} from './vue-apollo';

import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory';

Vue.config.productionTip = false;

const cache = new InMemoryCache();

const typeDefs = gql`
  type Item {
    id: ID!
    text: String!
    done: Boolean!
  }
`;

const apolloClientProvider = createProvider({
  cache,
  typeDefs,
  resolvers: {},
});

cache.writeData({
  data: {
    todoItems: [
      {
        __typename: 'Item',
        id: 'dqdBHJGgjgjg',
        text: 'test',
        done: true,
      },
    ],
  },
});

new Vue({
  router,
  store,
  apolloProvider: apolloClientProvider,
  render: h => h(App)
}).$mount('#app')
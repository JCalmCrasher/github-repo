import Vue from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import {
  createProvider
} from './vue-apollo';
import { typeDefs } from './resolvers';
import { InMemoryCache } from 'apollo-cache-inmemory';

Vue.config.productionTip = false;

const cache = new InMemoryCache();

const apolloClientProvider = createProvider({
  cache,
  typeDefs,
  resolvers: {},
});

cache.writeData({
  data: {
    todoItems: [
      {
        __typename: 'User',
        avatarUrl: 'joshua1234',
        name: 'Josh',
        login: 'JCalmCrasher',
        location: 'Abuja',
      },
    ],
  },
});

new Vue({
  router,
  apolloProvider: apolloClientProvider,
  render: h => h(App)
}).$mount('#app')
import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';

import {ApolloProvider} from '@apollo/client';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './src/components/Home';
import {Course} from './src/components/Course';
import {setContext} from 'apollo-link-context';
import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import Config from 'react-native-config';
const httpLink = createHttpLink({
  uri: 'https://graphql.contentful.com/content/v1/spaces/8gp2519ce6g7',
});

const authLink = setContext((_, {headers}) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${Config.CONTENTFUL_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <>
        <ApolloProvider client={client}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{flex: 1}}>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen
                name="Course"
                component={Course}
                options={({route}) => ({title: route.params.name})}
              />
            </Stack.Navigator>
          </SafeAreaView>
        </ApolloProvider>
      </>
    </NavigationContainer>
  );
};

export default App;

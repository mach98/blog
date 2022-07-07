import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from './src/context/BlogContext';

import IndexScreen from './src/screens/IndexScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={{title: 'Blog'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

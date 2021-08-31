/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ListContacts from './src/screens/ListContacts';

const App: FC = () => {
  return (
    <NavigationContainer>
      <ListContacts />
    </NavigationContainer>
  );
};

export default App;

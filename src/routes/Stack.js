import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTab from './BottomTab';
import QrScanner from '../screens/QrScanner';

const StackRoute = createStackNavigator();

function Stack() {
  return (
    <StackRoute.Navigator>
      <StackRoute.Screen
        name="BottomTab"
        options={{headerShown: false}}
        component={BottomTab}
      />
      <StackRoute.Screen
        name="QrScanner"
        options={{headerShown: false}}
        component={QrScanner}
      />
    </StackRoute.Navigator>
  );
}

export default Stack;

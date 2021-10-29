import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import {AppStyles} from '../utils/AppStyles';
import {Images} from '../utils/Images';

import Home from '../screens/Home';
import QrScanner from '../screens/QrScanner';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTab = props => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          if (route.name == 'Home') {
            return (
              <Icon
                name={'box'}
                color={
                  focused
                    ? AppStyles.color.primary
                    : AppStyles.color.primaryLight
                }
                size={focused ? 25 : 23}
              />
            );
          } else if (route.name == 'Qr') {
            return (
              <Pressable
                style={styles.qr_button}
                onPress={() => props.navigation.navigate('QrScanner')}>
                <Image
                  source={Images.qr_scanner}
                  style={styles.qr_button_image}
                />
              </Pressable>
            );
          } else {
            return (
              <Icon
                name={'user'}
                color={
                  focused
                    ? AppStyles.color.primary
                    : AppStyles.color.primaryLight
                }
                size={focused ? 25 : 23}
              />
            );
          }
        },
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          height: '10%',
          backgroundColor: AppStyles.color.white,
          borderTopWidth: 1,
          borderTopColor: AppStyles.color.transparent,
        },
      })}>
      <Tab.Screen name="Home" options={{headerShown: false}} component={Home} />
      <Tab.Screen
        name="Qr"
        options={{headerShown: false}}
        component={QrScanner}
      />
      <Tab.Screen
        name="Profile"
        options={{headerShown: false}}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  qr_button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    shadowColor: AppStyles.color.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
  },
  qr_button_image: {
    width: 47,
    height: 47,
  },
});

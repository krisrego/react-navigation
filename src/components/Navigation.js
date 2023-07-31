/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TweetDetailsScreen from '../screens/TweetDetailsScreen'

import { createDrawerNavigator } from '@react-navigation/drawer'
import Payments from '../screens/Payments'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Feed from '../screens/Feed'
import Settings from '../screens/Settings'
import Notifications from '../screens/Notifications'
import { Ionicons } from '@expo/vector-icons'

import { useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { Pressable, Image } from 'react-native'

// TopTabs
const TopTabs = createMaterialTopTabNavigator()

const TopTabsGroup = () => {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontWeight: 'bold'
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: '#A3E4D7'
        }
      }}
    >
      <TopTabs.Screen name="main" component={Feed} />
      <TopTabs.Screen name="Following" component={Payments} />
      <TopTabs.Screen name="😁" component={Payments} />
    </TopTabs.Navigator>
  )
}

// Stack

const HomeStack = createNativeStackNavigator()

const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="TweetDetailsScreen"
        component={TweetDetailsScreen}
        options={{ presentation: 'fullScreenModal' }}
      />
    </HomeStack.Navigator>
  )
}

// Tab Bottom
const Tab = createBottomTabNavigator()

const TabGroup = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName
          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'ios-settings-sharp'
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'ios-notifications' : 'notifications-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#1DA1F2',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen
        name="Feed"
        component={TopTabsGroup}
        options={{
          tabBarLabel: '@kris25',
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require('../../assets/beto.jpeg')}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginLeft: 15
                }}
              />
            </Pressable>
          )
        }}
      />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

// Drawer
const Drawer = createDrawerNavigator()

const DrawerGroup = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeStackGroup" component={HomeStackGroup} />
      <Drawer.Screen
        name="Payments"
        component={Payments}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  )
}

const Navigation = () => {
  const currentTheme = useColorScheme()
  return (
    <NavigationContainer
      theme={currentTheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <StatusBar style="auto" />
      <DrawerGroup />
    </NavigationContainer>
  )
}

export default Navigation

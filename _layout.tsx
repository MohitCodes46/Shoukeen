import { Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../../constants/theme';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false, headerShown: false, 
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grayDark,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: 'transparent',
          height: 50, 
          paddingBottom: 8,
          paddingTop: 5,
          position: 'absolute',
        }      
    }}>

        <Tabs.Screen name='home' 
            options={{
                tabBarIcon: ({ size, color }) => <Ionicons name='home' size={28} color={color} />,
            }}
        />
        <Tabs.Screen name='categories'  
            options={{
                tabBarIcon: ({ size, color }) => <Ionicons name='grid' size={28} color={color} />,
            }}
        />
        <Tabs.Screen name='cart' 
            options={{
                tabBarIcon: ({ size, color }) => <Ionicons name='cart' size={28} color={color} />,
            }}
        />
        <Tabs.Screen name='profile'
            options={{
                tabBarIcon: ({ size, color }) => <Ionicons name='person' size={28} color={color} />,
            }}
        />
    </Tabs>
    
  )
}

import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeUser from '../../../modules/stackScreens/adapters/screens/HomeUser'
const Stack = createNativeStackNavigator();
export default function ProfileStack() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerMode: 'screen',
                headerTintColor: 'tomato',
                headerTitleStyle: {color: '#000'},
                headerStyle: {backgroundColor: 'tomato'},
        }}
    >
        <Stack.Screen 
            name="homeUserStack"
            options={{title: 'Bienvenido'}}
            component={HomeUser}
        />

    </Stack.Navigator>
  )
    
}
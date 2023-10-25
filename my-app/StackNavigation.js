import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomseScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen'
import CardScreen from './screens/CardScreen'

const StackNavigation = () => {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomseScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Menu' component={MenuScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Cart' component={CardScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})
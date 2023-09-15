import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import FoodTypes from '../components/FoodTypes';
import QuickFood from '../components/QuickFood';

const HomseScreen = () =>  {
  return (
    <ScrollView style={{marginTop:30}}>
      <View style={styles.inputBox}>
        <TextInput style={styles.inputBoxInside} placeholder='Search for restraunts nearby' />
        <AntDesign color='#e52b50' name="search1" size={24} style={{marginRight:4.}}/>
      </View>
      <Carousel/>
      <FoodTypes/>
      <QuickFood/>
    </ScrollView>
  )
}

export default HomseScreen

const styles = StyleSheet.create({
  inputBox:{
    flexDirection:'row', marginLeft:12,marginRight:12,borderWidth:1,paddingVertical:7,paddingHorizontal:5,
    marginTop:15,borderColor:'#C0C0C0',borderRadius:7, marginBottom:10
  },
  inputBoxInside:{
    fontSize:17,
    flex:1
  }
})
import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import FoodTypes from '../components/FoodTypes';
import QuickFood from '../components/QuickFood';
import { Ionicons } from '@expo/vector-icons';
import hotels from '../data/hotels';
import MenuItem from '../components/MenuItem';

const HomseScreen = () =>  {
  const data = hotels
  return (
    <ScrollView style={{marginTop:30}}>

      {/* Input Section */}
      <View style={styles.inputBox}>
        <TextInput style={styles.inputBoxInside} placeholder='Search for restraunts nearby' />
        <AntDesign color='#e52b50' name="search1" size={24} style={{marginRight:4.}}/>
      </View>

      {/* Carousel Section */}

      <Carousel/>

      {/* FoodTypes Section */}

      <FoodTypes/>

      {/* QuickFood Section */}

      <QuickFood/>

      {/* Button Section */}

       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:10}}>
        <Pressable style={{borderWidth:1,paddingVertical:7,marginHorizontal:10,borderRadius:18,width:140}}>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
              <Text style={{fontSize:18,fontWeight:400,marginRight:5}}>Filter</Text>
              <Ionicons name="filter" size={24} color="black" />
            </View>
        </Pressable>
        <Pressable style={{borderWidth:1,paddingVertical:7,marginHorizontal:10,borderRadius:18,width:160}}>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
              <Text style={{fontSize:18,fontWeight:400,marginRight:5}}>Sort by ratings</Text>
            </View>
        </Pressable>
        <Pressable style={{borderWidth:1,paddingVertical:7,marginHorizontal:10,paddingLeft:14,paddingRight:14,borderRadius:18,width:160}}>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
              <Text style={{fontSize:18,fontWeight:400,marginRight:5}}>Sort by price</Text>
            </View>
        </Pressable>   
       </ScrollView>

       <View style={{marginTop:13}}>
       {
        data.map((item,index)=>{
          return(
            <MenuItem key={index} item={item} />
          )
        })
       }
       </View>


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
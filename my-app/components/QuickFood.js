import { ScrollView, StyleSheet, Text, View, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import quickFood from '../data/quickFood'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const QuickFood = () => {
  return (
    <View style={{}}>
        <Text style={{fontSize:20,fontWeight:'500',marginLeft:10}}>Get it quickly</Text>
      <ScrollView style={{marginLeft:11}} horizontal showsHorizontalScrollIndicator={false}>
        {
            quickFood.map((item,index)=>{
                return(
                    <Pressable style={{margin:10}} key={index}>
                        <ImageBackground imageStyle={{borderRadius:6 }} style={{aspectRatio:5/6,height:170}} source={{uri:item.image}}>
                            <Text style={{position:'absolute',bottom:10,left:5,fontSize:30,fontWeight:'900',color:'#fff'}}>{item.offer} OFF</Text>
                        </ImageBackground>
                        <Text style={{fontSize:17,fontWeight:500, marginLeft:3}}>{item.name}</Text>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                          <MaterialCommunityIcons name="star-circle" size={24} color="green" />
                          <Text style={{fontSize:15,fontWeight:500}}>{item.rating}  {item.time} mins</Text>
                        </View>
                    </Pressable>
                )
            })
        }
      </ScrollView>
    </View>
  )
}

export default QuickFood

const styles = StyleSheet.create({})

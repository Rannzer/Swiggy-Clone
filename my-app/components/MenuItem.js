import { Pressable, StyleSheet, Text, View,Image, ImageBackground } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

const MenuItem = ({item}) => {
  return (
    <View style={{margin:10}}>
      <Pressable>
        <View style={{flex:1,flexDirection:'row'}}>
            <ImageBackground imageStyle={{borderRadius:8}} style={{height:150,aspectRatio:4/5,borderRadius:8}} source={{uri:item.image}}>
              <Pressable>
                <AntDesign style={{position:'absolute',right:10,top:10}} name="hearto" size={24} color="white" />
              </Pressable>
            </ImageBackground>

            <View style={{flex:1,marginLeft:10,marginTop:3}}>
                <Text style={{fontSize:18,fontWeight:500}}>{item.name}</Text>
                <View style={{flexDirection:'row',marginTop:3,alignItems:'center'}}>
                    <MaterialCommunityIcons name="star-circle" size={24} color="green" />
                    <Text style={{fontSize:15,fontWeight:500,marginLeft:3}}>{item.rating}  {item.time} mins</Text>
                </View>
                <Text style={{color:'gray',marginTop:3,fontSize:16}}>{item.adress}</Text>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:3}}>
                   <FontAwesome name="rupee" size={22} color="black" />
                   <Text style={{fontSize:19}}>{item.cost_for_two} </Text>
                   <Text style={{fontSize:16}}>for two</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:3}}>
                   <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
                   <Text style={{marginLeft:4,fontSize:17}}>Free Delivery</Text>
                </View>
            </View>

        </View>
      </Pressable>
    </View>
  )
}

export default MenuItem

const styles = StyleSheet.create({})
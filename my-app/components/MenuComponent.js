import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const MenuComponent = ({food}) => {
  return (
    <View>
        <Pressable style={{margin:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <View>
                <Text style={{fontSize:18,fontWeight:600}}>{food.name}</Text>
                <Text>{food.price}</Text>
                <Text style={{marginTop:5,borderRadius:4}}>
                    {[0,0,0,0,0].map((en,i)=>(
                        <FontAwesome 
                        style={{paddingHorizontal:3}} 
                        name={i<Math.floor(food.rating) ? "star" : "star-o"} 
                        size={15} 
                        color='#FFD700' 
                        />
                    ))}
                </Text>
                <Text style={{width:100,fontSize:18,color:'gray'}}>{food.description.length  > 30 ? food.description.substr(0,30) : food.description}</Text>
            </View>
            
            <Pressable>
                <Image style={{width:120,aspectRatio:1/1,borderRadius:8}} source={{uri:food.image}} />
                <Pressable style={{
                    position:'absolute',
                    top:90,
                    left:20,

                    flexDirection:'row',
                    paddingHorizontal:25,
                    paddingVertical:10,
                    alignItems:'center',
                    backgroundColor:'white',
                    borderRadius:8
                }}>
                    <Text style={{fontSize:18,fontWeight:600,color:'#018749'}}>ADD</Text>
                </Pressable>
            </Pressable>
        </Pressable>
    </View>
  )
}

export default MenuComponent

const styles = StyleSheet.create({})
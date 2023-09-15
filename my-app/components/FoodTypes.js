import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const FoodTypes = () => {
    const types = [
        {
            id:"0",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq",
            name:"Biriyani",
        },
        {
            id:"1",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc",
            name:"Dessert"
        },
        {
            id:"2",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs",
            name:"Burger"
        },
        {
            id:"3",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/z9xmu9pb65lcbt3wepud",
            name:"Salad",

        },
        {
            id:"4",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m7osxfhdon2opecztidb",
            name:"Sandwiches"
        }
    ]
  return (
    
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            types.map((items,index)=>{
                return(
                <View style={{marginTop:12,marginRight:12,marginLeft:10,marginBottom:12,flex:1,justifyContent:'center',alignItems:'center'}} key={index}>
                    <Image source={{uri:items.image}} style={{width:60,height:60,borderRadius:30}} />
                    <Text style={{marginTop:4}}>{items.name}</Text>
                </View>
                )
            })
        }
      </ScrollView>  
    
  )
}

export default FoodTypes

const styles = StyleSheet.create({})
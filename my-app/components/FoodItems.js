import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import MenuComponent from './MenuComponent';

const FoodItems = ({item}) => {
    const data = [item]
    const[selected,setSelected] = useState(["Recommended"])
    const onHandleItem = (item) =>{
      const itemSelected = selected.find((c)=> c===item)
      if(itemSelected){
      setSelected(selected.filter((ele)=> ele !== item))
      }
      else{
        setSelected([...selected,item])
      }
    }
  return (
    <View>
      {
        data.map((item,index)=>(
          
          <>
            <Pressable onPress={()=>onHandleItem(item.name)} key={index} style={{margin:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:22,fontWeight:700}}>{item.name} ({item.items.length})</Text>
              {selected.includes(item.name)?
                <AntDesign name="up" size={24} color="black" />
                :
                <AntDesign name="down" size={24} color="black" />}
              
            </Pressable>

            {selected.includes(item.name)?
               (item.items.map((food,index)=>(
                <MenuComponent key={index} food={food}/>
               ))
               ):
               (null)
            }
</>
        ))
      }
    </View>
  )
}

export default FoodItems

const styles = StyleSheet.create({})
import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import FoodItems from '../components/FoodItems';
import { MaterialIcons } from '@expo/vector-icons';
import { Modal, ModalPortal } from 'react-native-modals';


const MenuScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    console.log(route.params)
    const [menu,setMenu] = useState([])
    const [visible,setVisible] = useState(false)

    useEffect(()=>{
      const fetchMenu = () =>{
        setMenu(route.params.menu)
      }
      fetchMenu()
    },[])
    const toggleModal = () =>{
      setVisible(!visible)
      console.warn('pressed')
    }


  return (
    <>
    <ScrollView style={{}}>
      <SafeAreaView>
      <View style={{height:300,backgroundColor:'#B0C4DE',borderBottomLeftRadius:40,borderBottomRightRadius:40}}>
        <View style={{flexDirection:'row',marginTop:10,paddingHorizontal:15}}>
          <Ionicons onPress={()=>navigation.goBack()} style={{flex:1}} name="arrow-back" size={24} color="black" />
          <View>
            <Pressable onPress={()=>console.warn("Search press hogya")} style={{flexDirection:'row'}}>
              <AntDesign name="search1" size={24} color="black" />
              <Text style={{fontSize:17,fontWeight:500,marginLeft:2}}>Search</Text>
            </Pressable>
          </View>
        </View>
        <View style={{flex:1,marginTop:20,alignItems:'center'}}>
            <View style={{height:'80%',width:'85%',backgroundColor:'#fff',borderRadius:20}}>
                <View style={{marginLeft:10,marginTop:10,marginRight:10}}>

                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:22,fontWeight:600,flex:1}}>{route?.params?.name}</Text>
                        <Entypo style={{marginRight:8}} name="share" size={24} color="black" />
                        <AntDesign style={{marginRight:5}} name="hearto" size={24} color="black" />
                    </View>

                   
                   <View style={{flexDirection:'row',alignItems:'center'}}>
                        <MaterialCommunityIcons name="star-circle" size={26} color="green" />
                        <Text style={{fontSize:18
                          ,fontWeight:500}}>{route.params.rating}  {route.params.time} mins</Text>
                    </View>
                    <Text styl={{fontSize:12}}>{route.params.cuisines}</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                        <Text style={{fontSize:17,fontWeight:500}}>Outlet</Text>
                        <Text style={{color:'gray',fontWeight:500,marginLeft:5,fontSize:15}}> {route.params.address}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                        <Text style={{fontSize:17,fontWeight:500}}>{route.params.time} mins</Text>
                        <Text style={{color:'gray',fontWeight:500,marginLeft:5,fontSize:15}}> Home</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'gray',marginTop:5}}></View>
                    
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                        <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                            <Ionicons name="bicycle" size={24} color="orange  " />
                            <Text style={{color:'gray',fontWeight:400,marginLeft:5,fontSize:15}}> 0-3 kms |</Text>
                        </View>
                        <Text style={{color:'gray',fontWeight:500,marginLeft:3,fontSize:15,marginTop:5}}> 35 delivery fee will apply</Text>

                    </View>

                    
                </View>
            </View>
        </View>

      </View>
      <Text style={{textAlign:'center',fontSize:17,fontWeight:500,marginTop:10}}>MENU</Text>
      <View style={{height:1,backgroundColor:'gray',marginTop:10}}></View>
      

      {
        route.params.menu.map((item,index)=>{
          return(
            <FoodItems key={index} item={item} />
          )
        })
      }
      </SafeAreaView>
    </ScrollView>
    <Pressable onPress={toggleModal} style={{width:60,height:60,borderRadius:40,backgroundColor:'black',justifyContent:'center',alignContent:'center',position:'absolute',bottom:35,right:25,marginLeft:'auto',alignItems:'center'}}>
      <MaterialIcons name="menu-book" size={24} color="white" />
      <Text style={{color:'white',fontWeight:500}}>MENU</Text>
    </Pressable> 

    <Modal isVisible={visible} onBackdropPress={toggleModal}>
      <View style={{height:190,width:250,backgroundColor:'black',position:'absolute',bottom:35,rightz:25,borderRadius:7}}>
        <Text>hello</Text>
      </View>
    </Modal>
    </>
  )
}

export default MenuScreen

const styles = StyleSheet.create({})
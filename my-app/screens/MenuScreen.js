import { Pressable, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
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
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';


const MenuScreen = () => {
    const cart = useSelector((state) => state.cart.cart)
    const total = cart.map((item) => item.price * item.quantity).reduce((curr,prev) => curr + prev,0)
    console.log(total)
    console.log(cart)
    const route = useRoute()
    const navigation = useNavigation()
    // console.log(route.params)
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
      <View style={{height:190,width:250,backgroundColor:'black',position:'absolute',bottom:35,right:10,borderRadius:7}}>
        
        {
          menu.map((item,i)=>{
            return(
              <View style={{padding:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} key={i}>
                <Text style={{color:"#D0D0D0",fontWeight:600,fontSize:19}}>{item.name}</Text>
                <Text style={{color:"#D0D0D0",fontWeight:600,fontSize:19}}>{item.items.length}</Text>
              </View>
            )
          })
        }
        <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={{ width: 120, height: 70, resizeMode: "contain" }}
                source={{
                  uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza",
                }}
              />
            </View>

      </View>
    </Modal>
    
    {
      (total === 0) ? 
      (
        null
      ) :
      (
        <Pressable style={{flexDirection:"row",backgroundColor:"#00A877",width:'90%',padding:13,marginLeft:"auto",marginRight:"auto",marginBottom:20,position:"absolute",left:20,bottom:10,borderRadius:8}}>
          <View style={{flex:1}}>
            <Text style={{color:"white",fontSize:15,fontWeight:500}}>{cart.length} | {<FontAwesome style={{marginTop:2}} name="rupee" size={16} color="white" />} {total}</Text>
            <View style={{flexDirection:"row"}}>
              
              <Text style={{color:"white",fontSize:15,fontWeight:400,marginLeft:3}}>Extra charges may apply!</Text>
            </View>
          </View>
          <Pressable onPress={()=>navigation.navigate("Cart",{
            name: route.params.name
          })} style={{alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:"white",fontSize:17,fontWeight:500}}>View Cart</Text>
          </Pressable>
        </Pressable>
      )
    }
    </>
  )
}

export default MenuScreen

const styles = StyleSheet.create({})
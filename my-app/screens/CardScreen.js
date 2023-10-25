import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from '@expo/vector-icons';
import { decrementQuantity, incrementQuantity, removeFromCart } from "../redux/CartReducer";

const CardScreen = () => {
  const route = useRoute();
  const cart = useSelector((state) => state.cart.cart);
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const total = cart.map((item) => item.price * item.quantity).reduce((curr,prev) => curr + prev,0)
  return (
    <ScrollView style={{ marginTop: 40 }}>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={25}
          color="black"
        />
        <Text style={{ fontWeight: 500, fontSize: 19, marginLeft: 3 }}>
          {route.params.name}
        </Text>
      </View>

      {
        (total > 0) ? (
            <>
                  <View
        style={{
          flexDirection: "row",
          margin: 10,
          padding: 13,
          backgroundColor: "white",
          borderRadius: 8,
        }}
      >
        <Text style={{ flex: 1, fontSize: 15, fontWeight: 500, color: "gray" }}>
          Ordering for someone else?
        </Text>
        <Text style={{ color: "red", fontSize: 16, fontWeight: 500 }}>
          Add Details
        </Text>
      </View>

      <View
        style={{
          marginTop: 14,
          marginHorizontal: 10,
          backgroundColor: "white",
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}
      >
        {cart.map((item, index) => {
          return (
            <View style={{flexDirection:'row',alignItems:"center",justifyContent:"space-between",marginVertical:5}}>
              <View style={{width:100}}>
                <Text style={{fontSize:16,fontWeight:500}}>{item.name}</Text>
              </View>
              <Pressable
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  paddingVertical: 0,
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: "gray",
                }}
              >
                <Pressable onPress={()=>{
                    dispatch(decrementQuantity(item))
                }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: "green",
                      paddingHorizontal: 6,
                    }}
                  >
                    -
                  </Text>
                </Pressable>

                <Pressable>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "green",
                      paddingHorizontal: 6,
                    }}
                  >
                    {item.quantity}
                  </Text>
                </Pressable>

                <Pressable onPress={()=>{
                    dispatch(incrementQuantity(item))
                }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "green",
                      paddingHorizontal: 6,
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>
              <View style={{flexDirection:"row",alignItems:"center"}}>
                <FontAwesome style={{marginTop:3}} name="rupee" size={18} color="black" />
                <Text style={{fontSize:18,fontWeight:600}}>{item.price * item.quantity}</Text>
              </View>
            </View>
          );
        })}
      </View>

            </>
        ): (
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                <Text style={{textAlign:"center",fontSize:16,fontWeight:600}}>Your Cart is empty!</Text>
            </View>
        )
      }


    </ScrollView>
  );
};

export default CardScreen;

const styles = StyleSheet.create({});

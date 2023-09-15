import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomseScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.conatiner}>
      <HomseScreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    backgroundColor:'#fff'
  }
});

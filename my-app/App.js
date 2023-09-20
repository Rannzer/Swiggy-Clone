import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomseScreen from './screens/HomeScreen';
import StackNavigation from './StackNavigation';
import { ModalPortal } from 'react-native-modals';

export default function App() {
  return (
    <View style={styles.conatiner}>
      {/* <HomseScreen/> */}
      <StackNavigation/>
      <ModalPortal/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    backgroundColor:'#fff'
  }
});

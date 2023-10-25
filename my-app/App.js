import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomseScreen from './screens/HomeScreen';
import StackNavigation from './StackNavigation';
import { ModalPortal } from 'react-native-modals';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigation/>
    </Provider>
      
  );
}

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    backgroundColor:'#fff'
  }
});

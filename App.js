import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TouchableOpacity, ScrollView} from 'react-native';
import normalize from 'react-native-normalize';
import Textbox from './Component/textbox';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.outerV}>
        <Image
          style={styles.tinyLogo}
          source={require('./assets/favicon.png')}
        />
      </View>
      
      <Textbox iconName='email' placeholder='Enter email' Ktype='email-address' />
      <Textbox iconName='email' placeholder='Enter email' Ktype='email-address' />
      <Text style={{fontSize:normalize(40),marginBottom:normalize(20)}}>Here is a text!</Text>
     
      <TouchableOpacity style={styles.button}>
          <Text style={{fontSize:normalize(30)}}>Login</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  outerV:{
    marginTop:normalize(100,'height'),
    width:normalize(250,'width'),
    height:normalize(250,'height'),
    backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center'
  },
  tinyLogo:{
    width:normalize(200),
    height:normalize(200),
  },
  button:{
    width:normalize(320),
    height:normalize(60),
    borderRadius:normalize(10),
    backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center'
  }
});
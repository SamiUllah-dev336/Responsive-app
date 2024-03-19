import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
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
      <Text style={{fontSize:normalize(40)}}>Here is a text!</Text>
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
    width:normalize(250),
    height:normalize(250,'height'),
    backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center'
  },
  tinyLogo:{
    width:normalize(200),
    height:normalize(200,'height'),
  }
});
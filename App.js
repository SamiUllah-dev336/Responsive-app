import 'react-native-gesture-handler';
import { StyleSheet, Text, View ,Image, TouchableOpacity, ScrollView, KeyboardAvoidingView,Platform} from 'react-native';
import normalize from 'react-native-normalize';
import Textbox from './Component/textbox';
import KeyboardAvoidingContainer from './Component/KeyboardAvoidingContainer';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


function Home() {
  return (
      <KeyboardAvoidingContainer>
          <View style={styles.outerV}>
            <Image
              style={styles.tinyLogo}
              source={require('./assets/favicon.png')}
            />
          </View>
          
          <Textbox iconName='email' placeholder='Enter email' Ktype='email-address' />
          <Textbox iconName='email' placeholder='Enter email' Ktype='email-address' />
          <Textbox iconName='email' placeholder='Enter email' Ktype='email-address' />
          <Textbox iconName='email' placeholder='Enter email' Ktype='email-address' />
          
          <Text style={{fontSize:normalize(40),marginBottom:normalize(20),alignSelf:'center'}}>Here is a text!</Text>
        
          <TouchableOpacity style={styles.button}>
              <Text style={{fontSize:normalize(30)}}>Login</Text>
          </TouchableOpacity>

      </KeyboardAvoidingContainer>
        
     
  );
}

const styles = StyleSheet.create({
  outerV:{
    width:normalize(250),
    height:normalize(250),
    backgroundColor:'yellow',
    alignSelf:'center',
    alignItems:'center',
    justifyContent: 'center',
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
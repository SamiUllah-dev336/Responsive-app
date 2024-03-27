import 'react-native-gesture-handler';
import { StyleSheet, Text, View ,Image, TouchableOpacity, ScrollView, KeyboardAvoidingView,Platform} from 'react-native';
import { scale, ScaledSheet, verticalScale,moderateVerticalScale } from 'react-native-size-matters';
import Textbox from './Component/textbox';
import KeyboardAvoidingContainer from './Component/KeyboardAvoidingContainer';
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
          
          <Text style={{fontSize:scale(40),marginBottom:verticalScale(20),alignSelf:'center'}}>Here is a text!</Text>
        
          <TouchableOpacity style={styles.button}>
              <Text style={{fontSize:scale(30)}}>Login</Text>
          </TouchableOpacity>

      </KeyboardAvoidingContainer>
        
     
  );
}

const styles = StyleSheet.create({
  outerV:{
    width:scale(250),
    height:verticalScale(250),
    backgroundColor:'yellow',
    alignSelf:'center',
    alignItems:'center',
    justifyContent: 'center',
  },
  tinyLogo:{
    width:scale(200),
    height:verticalScale(200),
  },
  button:{
    width:scale(320),
    height:verticalScale(60),
    borderRadius:scale(10),
    backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center'
  }
});
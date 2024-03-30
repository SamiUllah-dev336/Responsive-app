import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TextInput,KeyboardAvoidingView} from 'react-native';
//import normalize from 'react-native-normalize';
//import { scale,verticalScale,moderateScale } from 'react-native-size-matters';

import Icon from 'react-native-vector-icons/Zocial'
//import { horizontalScale } from './Responsive';
import normalize from 'react-native-normalize';


export default function Textbox(props) {
  return (
    <View style={styles.container}>
        <Icon name={props.iconName} size={normalize(30)} style={styles.icon} />
        <TextInput 
          placeholder={props.placeholder}
          keyboardType={props.Ktype}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    marginTop:normalize(20),
    width:normalize(320),
    //padding:10,
    height:normalize(50),
    borderRadius:normalize(10),
    flexDirection:'row',
    alignItems:'center',
  },
  icon:{
    marginLeft:normalize(10),
    marginRight:normalize(10)
  }

});
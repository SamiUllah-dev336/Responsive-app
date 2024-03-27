import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TextInput,KeyboardAvoidingView} from 'react-native';
//import normalize from 'react-native-normalize';
import { scale,verticalScale,moderateScale } from 'react-native-size-matters';

import Icon from 'react-native-vector-icons/Zocial'


export default function Textbox(props) {
  return (
    <View style={styles.container}>
        <Icon name={props.iconName} size={scale(30)} style={styles.icon} />
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
    marginTop:verticalScale(20),
    width:scale(320),
    height:verticalScale(50),
    borderRadius:scale(10),
    flexDirection:'row',
    alignItems:'center',
  },
  icon:{
    marginLeft:scale(10),
    marginRight:(10)
  }

});
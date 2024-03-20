import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TextInput,KeyboardAvoidingView} from 'react-native';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/Zocial'

export default function Textbox(props) {
  return (
    <KeyboardAvoidingView style={styles.container}>
        <Icon name={props.iconName} size={normalize(30)} style={styles.icon} />
        <TextInput 
          placeholder={props.placeholder}
          keyboardType={props.Ktype}
        />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    marginTop:normalize(20,'height'),
    width:normalize(320),
    height:normalize(60),
    borderRadius:normalize(10) ,
    flexDirection:'row',
    alignItems:'center',
  },
  icon:{
    marginLeft:normalize(10),
    marginRight:normalize(10)
  }

});
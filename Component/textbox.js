import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TextInput,KeyboardAvoidingView} from 'react-native';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/Zocial'

export default function Textbox(props) {
  return (
    <View style={styles.container}>
        <Icon name={props.iconName} size={30} style={styles.icon} />
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
    marginTop:20,
    width:320,
    height:50,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
  },
  icon:{
    marginLeft:10,
    marginRight:10
  }

});
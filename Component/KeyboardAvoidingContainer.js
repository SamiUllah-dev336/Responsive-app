//import liraries
import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform,StatusBar } from 'react-native';
import normalize from 'react-native-normalize';

// create a component
const KeyboardAvoidingContainer = ({children,style,backgroundColor,headerAvailble=true}) => {
    const headerHeight=useHeaderHeight();
    console.log("header height!",headerHeight);
    return <SafeAreaView style={{
                                    flex: 1,
                                    backgroundColor: backgroundColor || 'orange',
                                    alignItems:'center'
                                }}>
                <KeyboardAvoidingView style={{flex:1}}
                                      behavior={Platform.OS === 'ios' ? 'padding':'height'}
                                      keyboardVerticalOffset={headerHeight}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[style,{paddingTop:headerAvailble ? 30 : Platform.OS==='android'? StatusBar.currentHeight+normalize(20):normalize(20)}]}>
                        {children}
                    </ScrollView>
                </KeyboardAvoidingView>
           </SafeAreaView>
};

//make this component available to the app
export default KeyboardAvoidingContainer;

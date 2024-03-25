import React, { useState, useEffect, useRef } from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import normalize from 'react-native-normalize';

const KeyboardAvoidingContainer = ({ children, style, backgroundColor, headerAvailble = true }) => {
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [contentOffset, setContentOffset] = useState(0);
    const scrollViewRef = useRef(null);

    useEffect(() => {
        
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
            setKeyboardHeight(event.endCoordinates.height);
            handleKeyboardShow(event.endCoordinates.height);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardHeight(0);
            handleKeyboardHide();
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleKeyboardShow = (keyboardHeight) => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: contentOffset + keyboardHeight, animated: true });
        }
    };

    const handleKeyboardHide = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: contentOffset, animated: true });
        }
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: backgroundColor || 'orange',
            alignItems: 'center'
        }}>
            <KeyboardAvoidingView 
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <ScrollView
                    ref={scrollViewRef}
                    style={{ flex: 1 }}
                    contentContainerStyle={[
                        style,
                        { paddingTop: headerAvailble ? normalize(30) : Platform.OS === 'android' ? StatusBar.currentHeight + normalize(20):normalize(20) }
                    ]}
                    keyboardShouldPersistTaps="handled"
                    onScroll={(event) => {
                        setContentOffset(event.nativeEvent.contentOffset.y);
                    }}>
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default KeyboardAvoidingContainer;

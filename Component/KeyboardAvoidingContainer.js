// KeyboardAvoidingContainer.js
import React from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const KeyboardAvoidingContainer = ({ children, backgroundColor }) => {
  return (
    
      <KeyboardAwareScrollView
          style={{
            flex: 1,
            backgroundColor: backgroundColor || 'orange',
          }}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={Platform.select({ ios: 40, android:20 })}
          enableOnAndroid={true}
          enableAutomaticScroll={true}
        >
        {children}
      </KeyboardAwareScrollView>
    
  );
};

export default KeyboardAvoidingContainer;

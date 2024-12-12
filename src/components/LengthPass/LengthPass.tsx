import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './LengthPassStyle';

export function LengthPass() {
  const [passwordLength, setPasswordLength] = useState(8); 
  

  function handleDecreaseButton() {
    if (passwordLength > 8) {
        setPasswordLength(passwordLength - 1);
    }
}

function handleIncreaseButton() {
    if (passwordLength < 16) {
        setPasswordLength(passwordLength + 1);
    }
}
  
  return (  
    <>    
      <Text style={styles.text}>{passwordLength}</Text>
      <View style={styles.button}>
      <Button onPress={handleDecreaseButton} title='Diminuir'/> 
      <Button onPress={handleIncreaseButton} title='Aumentar'/>
      </View>  
    </>  
  );
}
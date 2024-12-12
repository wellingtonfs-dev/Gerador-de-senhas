import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './LengthPassStyle';


interface LengthPassProps {
  passwordLength: number;
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
}

export const LengthPass: React.FC<LengthPassProps> = ({ passwordLength, setPasswordLength }) => {

  const handleDecreaseButton = (): void => {
    if (passwordLength > 8) {
      setPasswordLength(passwordLength - 1);
    }
  }

  const handleIncreaseButton = (): void => {
    if (passwordLength < 24) {
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
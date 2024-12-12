import React, { useState } from "react";
import { Text, Pressable } from "react-native";
import * as Clipboard from "expo-clipboard";
import { styles } from "./BatButtonStyle";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import generatePass from "../../services/passwordService";
import { LengthPass } from "../LengthPass/LengthPass";

export function BatButton() {
  const [pass, setPass] = useState("");
  const [passwordLength, setPasswordLength] = useState(8); 

  function handleGenerateButton() {
    const generatedPassword = generatePass(passwordLength); 
    setPass(generatedPassword);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
    alert("Copiado!");
  }

  return (
    <>
      <LengthPass 
        passwordLength={passwordLength} 
        setPasswordLength={setPasswordLength} 
      />
      <BatTextInput pass={pass} />
      <Pressable onPress={handleGenerateButton} style={styles.button}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>
      <Pressable onPress={handleCopyButton} style={styles.button}>
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}
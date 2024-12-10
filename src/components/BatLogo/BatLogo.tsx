import React from 'react';
import { View, Text, Image } from 'react-native';
import logo from '../../../assets/bat-logo.png'

import { styles } from './BatLogoStyle';

export function BatLogo() {
  return (
    <View>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Image source={logo} style={{resizeMode:'contain', height:180}}/>
    </View>
  );
}
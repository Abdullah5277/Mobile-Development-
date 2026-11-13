import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function app(){

  const [name,setname]=useState('');
  return(
    < View>
      <Text >
         Enter Your Name:
      </Text>
      <TextInput placeholder='Enter name' value={name} onChangeText={setname}  >

      </TextInput>
      <Text >
         Enter Your Name:{name}
      </Text>
    </View>
  )
}
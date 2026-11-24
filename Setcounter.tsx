import React, { useState } from 'react';
import { View, Text, TextInput ,Button} from 'react-native';

export default function App(){
const [counter ,setcounter]=useState(0);
  return(
    <View>
      <Text>Counter </Text>
  <Button title='Increse' onPress={() => setcounter(counter + 1)}/>
  <Button title='Decrese' onPress={()=> setcounter(counter-1)}></Button>
  <Button title='Restart' onPress={()=> setcounter(0)}></Button>
  <Text> Count:{counter}</Text>
    </View>
  )}
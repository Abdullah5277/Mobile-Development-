
import { ScrollView, Text } from 'react-native';
 
export default function MyApp() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Student List</Text>
      <Text style={{ fontSize: 20, padding: 10 }}>Ali</Text>
      <Text style={{ fontSize: 20, padding: 10 }}>Sara</Text>
      <Text style={{ fontSize: 20, padding: 10 }}>Ahmed</Text>
      <Text style={{ fontSize: 20, padding: 10 }}>Ayesha</Text>
    </ScrollView>
  );
}





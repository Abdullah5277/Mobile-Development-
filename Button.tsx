
import { View } from 'react-native';
import MyButton from '../components/MyButton';

export default function HomeScreen() {
  return (
    <View>
      <MyButton
        title="Save"
        onPress={() => alert('Saved')}
      />

      <MyButton
        title="Delete"
        onPress={() => alert('Deleted')}
      />
    </View>
  );
}

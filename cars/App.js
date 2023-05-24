
import { View } from 'react-native';
import CarList from './src/components/CarList';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={{flex:1}}>
      <Header title="Cars" />
      <CarList/>
    </View>
  );
}


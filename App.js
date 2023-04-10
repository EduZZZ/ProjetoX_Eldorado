
import { StatusBar,
   StyleSheet,
    Text,
     SafeAreaView,
      Image, 
    Dimensions,
  View
} from 'react-native';

import Topo from './source/telas/Carrinho/Topo';
import topo from './assets/topo.png';
import logoVendedor from './assets/logo.png';
import Detalhes from './source/telas/Carrinho/Detalhes';

const width = Dimensions.get('screen').width;

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>

      <Topo/>
      <Detalhes/>
  
      <StatusBar  />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  
  },
  

});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,98',
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'SEFRAS',
    value: '1.200,00',
    date: '20/10/2022',
    type: 1, //despesas
  },
  {
    id: 3,
    label: 'Agro Alimentos',
    value: '2.850,00',
    date: '22/10/2022',
    type: 1, //despesas
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name='Davi Miguel'/>
        <Balance saldo='9.987,51' gastos='1.547,25'/>
        <Actions/>
        <Text style={styles.tittle}>
            Ultimas Movimentações
        </Text>
        <FlatList 
          style={styles.list}
          data={list}
          keyExtractor={ (item) => String(item.id) }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Moviments data={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },

  tittle:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,    
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
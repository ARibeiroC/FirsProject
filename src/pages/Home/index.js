import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: 300.98,
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Parcelamento Casa',
    value: 898.99,
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 3,
    label: 'Agro Alimentos',
    value: 2850.15,
    date: '22/10/2022',
    type: 1, //credito
  },
  {
    id: 4,
    label: 'SEFRAS',
    value: 1832.21,
    date: '20/10/2022',
    type: 1, //credito
  },
]

export default function Home() {
  let [credit, setCredit] = useState('')
  let [expense, setExpense] = useState('')


  function Expense(){
    let expense = 0
    for(let i = 0; i < list.length; i++ ){
      if (list[i].type === 0){
        expense = expense + list[i].value
      }
    }
    return expense.toFixed(2)
  }
  
  function Credit(){
    let credit = 0
    let formatCredit = 0
    for(let i = 0; i < list.length; i++ ){
      if (list[i].type === 1){
        credit = credit + list[i].value
      }
    }
    credit = credit - Expense()
    return credit.toFixed(2)
  }
  return (

    <View style={styles.container}>
        <Header name='Davi Miguel'/>
        <Balance saldo={Credit()} gastos={Expense()}/>
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
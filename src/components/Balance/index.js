import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Balance({ saldo, gastos}) {
 return (
    <View style={styles.container}>
        <View style={styles.item}>

            <Text style={styles.itemTittle}>Saldo</Text>
                
            <View style={styles.content}>
                <Text style={styles.currentSymbol}>R$ </Text>
                <Text style={styles.creditos}>{saldo}</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',

        backgroundColor: '#fff',
        marginTop: -24,
        paddingStart: 18,
        paddingEnd: 18,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 20,
        paddingTop: 22,
        paddingBotton: 22,
        zIndex: 99,
    },

    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },

    itemTittle:{
        fontSize: 20,
        color: '#888',
        fontWeight: 'bold',
    },

    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    currentSymbol:{
        color: '#888',
        fontSize: 16,
        marginRight: 6,
    },

    creditos:{
        fontSize: 22,
        color: '#2ecc71'
    },

    despesas:{
        fontSize: 22,
        color: '#e74c3c'
    },
})
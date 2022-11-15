import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons'

export default function Moviments({ data }) {
    const [showValue, setShowValue] = useState(true);

 return (
   <TouchableOpacity style={styles.container} onPress={ ()=> setShowValue(!showValue)}>

        <Text style={styles.date}>{data.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                { showValue ? (
                    <Text style={data.type === 1 ? styles.value : styles.despesas}>{data.type === 1 ? `R$ ${data.value}` : `-R$ ${data.value}`}</Text>
                ) : (    
                    <View style={styles.skeleton}>
                        <Feather name="eye" size={18} color="#888"/>             
                    </View>
                )}
            </View>
            

   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        color: 'red',
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#888'
    },

    date:{
        color: '#888',
        fontWeight: 'bold'
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,   
    },
    label:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    value:{
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    despesas:{
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold'
    },

    skeleton:{
    }
})
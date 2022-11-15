import React from "react"
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    StatusBar,
} from 'react-native'

import {Feather} from '@expo/vector-icons'
const statusbarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }){
    return(
        <View style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.userName}>{name}</Text>

                <TouchableOpacity activeOpacity={0.5} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#f83"/>
                </TouchableOpacity>         
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fa3',
        paddingTop: statusbarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },

    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    userName:{
        fontSize: 22,
        color: '#013',
        fontWeight: 'bold',
    },

    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44/2,
    }
})
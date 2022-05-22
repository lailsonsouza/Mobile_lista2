import React, { Component } from "react";
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Livro extends Component{
    render(){
        return(
            <View>
                <Text style={styles.nomeAutor}>Autor: {this.props.data.autor}</Text>
                <Text style={styles.nomeTitulo}>Título: {this.props.data.title}</Text>
                <Text style={styles.nomeUrl}>Url: {this.props.data.url}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    },
    nomeAutor:{
        color:'black',
        fontSize: 18,
        fontWeight:'bold'
    },

    nomeTitulo:{
        color:'green',
        fontSize: 16,
        fontWeight:'bold'
    },
    
    nomeUrl:{
        color:'blue',
        fontSize: 12,
    }    
    

})

import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { SafeAreaView, StyleSheet, FlatList, View, TextInput, TouchableOpacity, Text} from 'react-native';
import { useState, useEffect } from 'react';
import api from './src/Services/api';
import Livro from './src/Pages/Livro';

export default class App extends Component{
  
  

  constructor(props){
    super(props);
    this.state = {
      livros: []
    }
  }

  async componentDidMount(){
    const response = await api.get('/livros');
    this.setState({
      livros: response.data
    });
}

  render(){
    
    return (
      <SafeAreaView style={styles.container}>
        
        <View style={styles.caixa}>
        <Text>Insira qual livro deseja</Text>
        <TextInput
          placeholder={'Pesquisar'}
          style={styles.input}
        />
        <Text style={{color: 'blue'}}></Text>
      </View>

        <FlatList
          data={this.state.livros}
          keyExtractor={item =>item.id}
          renderItem={({item}) => <Livro data={item} />}
        />
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  caixa: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
  
});

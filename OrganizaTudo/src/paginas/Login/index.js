import React from 'react';
import { StyleSheet, Alert, Text, View } from 'react-native';
import MyButton from '../../componentes/botao-padrao';
import MyInput from '../../componentes/campo-padrao';
import MyPasswordInput from '../../componentes/campo-senha';

export default function Login({navigation}) {
  return (

    <View>
      
      <View style={styles.Header}>
        <Text style={styles.Titulo}>ORGANIZATUDO</Text>
      </View>

      <View style={styles.Body}>
        <MyInput focusable={true} placeholder={'Apelido'} onChangeText={(value) => setApelido(value)} />
        <MyPasswordInput focusable={true} onChangeText={(value) => setSenha(value)} />
      </View>

      <View style={styles.Footer}>
        <MyButton text="Acessar" onPress={() => { navigation.navigate('Tabs', {screen: 'NotasOnline'}); }} />
      </View>

    </View>

  );
}


const styles = StyleSheet.create({
  Titulo: {
    fontSize: 30
  },
  Texto: {
    color: '#FFF'
  },
  Link: {
    alignItems: 'center',
    color: '#35C0ED',
    fontSize: 17,
    marginTop: 10,
    marginBottom: 10
  },
  Header: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 30
  },
  Body: {
    alignItems: 'center',
    marginRight: 25,
    marginLeft: 25
  },
  Footer: {
    alignItems: 'center',
    marginRight: 25,
    marginLeft: 25,
    marginTop: 15
  },
  Links: {
    alignItems: 'center',
    marginTop: 20
  }
});

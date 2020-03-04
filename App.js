/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
} from 'react-native';

const App: () => React$Node = () => {
  addEntry = () => {
    alert('Abrir tela de adicionar lançamentos');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{padding: 10}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: 10,
              marginBottom: 10,
            }}>
            Saldo: $2.102,45
          </Text>

          <Button onPress={addEntry} title="Adicionar" />

          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: 10,
              marginBottom: 10,
            }}>
            Categorias
          </Text>

          <FlatList
            data={[
              {key: 'Alimentação: $200'},
              {key: 'Combustível: $12'},
              {key: 'Aluguel: $1000'},
              {key: 'Lazer: $120'},
              {key: 'Outros: $1200'},
            ]}
            renderItem={({item}) => <Text>{item.key}</Text>}
          />

          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: 10,
              marginBottom: 10,
            }}>
            Últimos Lançamentos
          </Text>

          <FlatList
            data={[
              {key: 'Padaria Asa Branca: $10'},
              {key: 'Supermercado Isadora: $190'},
              {key: 'Posto Ipiranga: $190'},
            ]}
            renderItem={({item}) => <Text>{item.key}</Text>}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Main = ({navigation}) => {
  const currentBalance = 2064.35;
  const entries = [
    {key: '1', description: 'Padaria Asa Branca', amount: '10'},
    {key: '2', description: 'Supermercado Isadora', amount: '190'},
    {key: '3', description: 'Posto Ipiranga', amount: '291'},
  ];

  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 200},
    {key: '2', description: 'Combustível', amount: 12},
    {key: '3', description: 'Aluguel', amount: 1000},
    {key: '4', description: 'Lazer', amount: 120},
    {key: '5', description: 'Outros', amount: 200},
  ];

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
    </View>
    /* </SafeAreaView> */
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    paddingTop: 50,
  },
});

export default Main;

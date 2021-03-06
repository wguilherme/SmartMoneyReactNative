import React from 'react';
import {StyleSheet, View, Picker, Button} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
  const currentBalance = 2065.35;
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
    <View>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <Picker>
          <Picker.item label="Todas categorias" />
          <Picker.item label="Últimos 7 dias" />
        </Picker>
      </View>

      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />

      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

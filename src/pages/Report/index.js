import React from 'react';
import {StyleSheet, View, Picker, Button} from 'react-native';
import EntryLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
  return (
    <View>
      <EntryLabel />

      <View>
        <Picker>
          <Picker.item label="Todas categorias" />
          <Picker.item label="Últimos 7 dias" />
        </Picker>
      </View>

      <EntrySummary />
      <EntryList />

      <View>
        <Button title="Saslvar" />
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

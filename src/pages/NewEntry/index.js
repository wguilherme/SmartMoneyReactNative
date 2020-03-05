import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';

const NewEntry = () => {
  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
        <Button title="Adicionar" />
        <Button title="Cancelar" />
      </View>
    </View>
  );
};

export default NewEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 20,
    marginTop: 20,
  },
});

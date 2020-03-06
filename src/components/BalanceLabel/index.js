import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Balancelabel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </View>
  );
};

export default Balancelabel;

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
  },
  value: {
    fontSize: 18,
  },
});

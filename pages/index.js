import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Main</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  label: {
    fontSize: 20,
  },
});

export default Main;

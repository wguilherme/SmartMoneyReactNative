import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Main = () => {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <BalancePanel />
      <EntrySummary />
      <EntryList />
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

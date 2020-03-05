import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Main = ({navigation}) => {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <BalancePanel />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
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

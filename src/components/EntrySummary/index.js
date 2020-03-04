import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';

const EntrySummary = () => {
  return (
    <View style={styles.container}>
      <EntrySummaryList />
      <EntrySummaryChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default EntrySummary;

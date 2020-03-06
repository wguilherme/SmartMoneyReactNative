import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const EntrySummaryList = ({entriesGrouped}) => {
  return (
    <View>
      <Text style={styles.title}>Categorias</Text>

      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => (
          <Text>
            - {item.description} - {item.amount}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntrySummaryList;

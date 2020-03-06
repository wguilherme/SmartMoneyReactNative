import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
// import EntryListItem from './EntryListItem';

const EntryList = ({entries}) => {
  return (
    <View>
      <Text style={styles.title}>Últimos Lançamentos</Text>

      <FlatList
        data={entries}
        renderItem={({item}) => (
          <Text>
            - {item.description} - ${item.amount}
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
  title: {fontSize: 22, fontWeight: 'bold', marginTop: 10, marginBottom: 10},
});

export default EntryList;

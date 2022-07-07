import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import React, {useContext} from 'react';

import {Context} from '../context/BlogContext';

import Icon from 'react-native-vector-icons/Feather';

export default function IndexScreen() {
  const {state, addBlogPost} = useContext(Context);
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <Icon name="trash" style={styles.icon} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    color: '#000',
  },
});

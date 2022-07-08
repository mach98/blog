import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';

import {Context} from '../context/BlogContext';

import Icon from 'react-native-vector-icons/Feather';

export default function IndexScreen({navigation}) {
  const {state, addBlogPost, deleteBlogPost} = useContext(Context);
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', {id: item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Icon name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
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
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    paddingVertical: 18,
  },
  icon: {
    fontSize: 24,
    color: '#000',
  },
});

import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';

import {useRoute} from '@react-navigation/native';

export default function ShowScreen() {
  const {state} = useContext(Context);
  const route = useRoute();

  const blogPost = state.find(bP => bP.id === route.params.id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({});

import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default function CreateScreen() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <View>
      <Text>Enter Title:</Text>
      <TextInput />

      <Text>Enter Content:</Text>
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({});

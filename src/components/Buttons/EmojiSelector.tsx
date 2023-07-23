import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../styles/GlobalStyles';

const EmojiSelector = () => {
    return (
        <TouchableOpacity style={styles.container}>
          <Text style={[styles.title]}>Emoji:  </Text>
          <Text style={GlobalStyles.text}>🐕</Text>
        </TouchableOpacity>
      );
}

export default EmojiSelector

const styles = StyleSheet.create({container: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#f0f0ec",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    ...GlobalStyles.text,
  },})
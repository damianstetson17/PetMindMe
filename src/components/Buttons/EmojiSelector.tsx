import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setSelectedEmoji } from "../../store/slices/notesSlice";

const EmojiSelector = () => {
  const dispatch = useAppDispatch();
  let emojis = useAppSelector((state) => state.notes.emojis);
  const [index, setIndex] = useState(0);
  const [emoji, setEmoji] = useState("");

  //needed for have the last updated values
  useEffect(() => {
    setEmoji(emojis[index]);
    dispatch(setSelectedEmoji(emoji));
  }, [index, emoji]);

  const changeNextEmoji = () => {
    //reset index
    if (index >= emojis.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => changeNextEmoji()}
      style={styles.container}
    >
      <Text style={[styles.title]}>Emoji: </Text>
      <Text style={GlobalStyles.text}>{emojis[index]}</Text>
    </TouchableOpacity>
  );
};

export default EmojiSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#f0f0ec",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    ...GlobalStyles.text,
  },
});

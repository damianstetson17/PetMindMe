import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";

import { GlobalStyles } from "../../styles/GlobalStyles";
const EmptyList = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20%",
        marginHorizontal: "10%",
      }}
    >
      <Text style={[GlobalStyles.subtitle, { fontSize: 18, marginBottom: -5 }]}>
        Aquí aparecerán las notas que agregues...
      </Text>
      <Image source={require("../../../assets/gifs/gif_ghost.gif")} />
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({});

import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const GlobalStyles = StyleSheet.create({
  title: {
    color: Colors.primaryBlack,
    fontFamily:'Andika_400Regular',
    fontSize: 40,
    flexWrap: 'wrap'
  },
  subtitle: {
    color: 'gray',
    fontFamily:'Andika_400Regular_Italic',
    fontSize: 23,
    flexWrap: 'wrap'
  },
  text:{
    fontSize: 17, fontFamily:'Andika_400Regular'
  }
});

import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import NavigationMenu from "../components/Menu/NavigationMenu";
import { GlobalStyles } from "../styles/GlobalStyles";
import React, { ReactNode } from "react";
import FAB from "../components/Buttons/FAB";
import AddNoteBottomSheet from "../components/BottomSheets/AddNote";
import AddPetBottomSheet from "../components/BottomSheets/AddPet";
import DeletePetBottomSheet from "../components/BottomSheets/DeletePet";

type Props = {
  title?: string;
  children?: ReactNode;
};

const Layout = ({ title, children }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "baseline" }}>
        <Text style={[GlobalStyles.title, styles.title]}>Mis notas</Text>
        <Text style={[GlobalStyles.subtitle, styles.subtitle]}>{title}</Text>
      </View>

      {/* navigator */}
      <NavigationMenu />
      {children}

      {/* actions floating button */}
      <FAB />

      {/* bottom sheets */}
      <AddNoteBottomSheet />
      <AddPetBottomSheet />
      <DeletePetBottomSheet />
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 5
  },
  title: {
    marginLeft: 15,
  },
  subtitle: {
    marginLeft: 10,
  },
});

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ItemNoteType, PetItemType } from "../../types";

/**
 * store pets list
 * @param value PetItemType[]
 */
export const storePets = async (value: PetItemType[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("pets", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

/**
 * store food notes list
 * @param value ItemNoteType[]
 */
export const storeFoodNotes = async (value: ItemNoteType[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("foodNotes", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

/**
 * store drugs notes list
 * @param value ItemNoteType[]
 */
export const storeDrugsNotes = async (value: ItemNoteType[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("drugsNotes", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

/**
 * store vet notes list
 * @param value ItemNoteType[]
 */
export const storeVetNotes = async (value: ItemNoteType[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("vetNotes", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

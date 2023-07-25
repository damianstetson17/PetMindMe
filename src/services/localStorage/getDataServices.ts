import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStoragedData = async (key: string) => {
  const values = await AsyncStorage.getItem(key);
  return values != null ? JSON.parse(values) : null;
};

import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = {
  get: async (key: string) => {
    const result = await AsyncStorage.getItem(key);
    if (result !== null) {
      const parseValue = JSON.parse(result);
      return parseValue.value;
    }
    return null;
  },

  create: async (key: string, value: any) => {
    const parseValue = {type: typeof value, value: value};
    await AsyncStorage.setItem(key, JSON.stringify(parseValue));
  },

  delete: async (key: string) => {
    await AsyncStorage.removeItem(key);
  }
};

export default storage;

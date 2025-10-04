import AsyncStorage from '@react-native-async-storage/async-storage';


export const storage = {
get: async (key: string) => {
const raw = await AsyncStorage.getItem(key);
return raw ? JSON.parse(raw) : null;
},
set: async (key: string, value: any) => {
await AsyncStorage.setItem(key, JSON.stringify(value));
},
remove: async (key: string) => {
await AsyncStorage.removeItem(key);
}
};
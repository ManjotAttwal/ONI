import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'FETAL_SESSIONS';

export const getSessions = async () => {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const saveSession = async (session) => {
    const existing = await getSessions();
    const updated = [session, ...existing];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

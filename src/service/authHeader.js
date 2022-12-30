import * as SecureStore from 'expo-secure-store';

export default async function authHeader() {
    const userToken = await SecureStore.getItemAsync('userToken');
    if (userToken) {
        return { Authorization: `Token ${userToken}` };
    }
    return {};
}
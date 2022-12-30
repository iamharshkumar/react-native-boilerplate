import React from 'react';
import { View, Text } from 'react-native';
import RoundButton from '../../components/generic/RoundButton';
import { AuthContext } from '../../contexts/AuthContext';
import authHeader from '../../service/authHeader';

export default function HomeScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <RoundButton onPress={signOut} title='SignOut' />

    </View>
  );
}

import React from 'react';
import styled from 'styled-components/native';
import RoundButton from '../../components/generic/RoundButton';
import TextInput from '../../components/generic/TextInput';
import { AuthContext } from '../../contexts/AuthContext';

const ViewContainer = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export default function Login({ navigation }) {
    const { signIn } = React.useContext(AuthContext);

    const [username, setUsername] = React.useState(null)
    const [password, setPassword] = React.useState(null)

    const onSubmit = () => {
        if (username && password) {
            signIn(username, password)
        }
    }

    return (
        <ViewContainer>
            <TextInput
                value={username}
                placeholder='Username'
                autoCapitalize='none'
                onChangeText={setUsername} />

            <TextInput
                value={password}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={setPassword} />

            <RoundButton onPress={onSubmit} title='Login' />
            <RoundButton
                onPress={() => navigation.navigate('Signup')}
                title='Register'
            />
        </ViewContainer>
    )
}

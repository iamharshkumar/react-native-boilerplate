import React from 'react';
import styled from 'styled-components/native';
import RoundButton from '../../components/generic/RoundButton';
import TextInput from '../../components/generic/TextInput';

const ViewContainer = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export default function Signup({ navigation }) {
    return (
        <ViewContainer>
            <TextInput placeholder='Username' />
            <TextInput placeholder="Password" secureTextEntry={true} />
            <TextInput placeholder="Confirm Password" secureTextEntry={true} />

            <RoundButton title='Register' />
            <RoundButton
                onPress={() => navigation.navigate('Login')}
                title='Login'
            />
        </ViewContainer>
    )
}

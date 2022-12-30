import React from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';

const ViewContainer = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export default function SplashScreen() {
    return (
      <ViewContainer>
        <Text>Loading...</Text>
      </ViewContainer>
    );
  }
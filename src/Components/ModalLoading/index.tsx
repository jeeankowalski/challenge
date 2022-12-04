import React from 'react';
import { useTheme } from 'styled-components';
import { Modal, ModalProps, ActivityIndicator } from 'react-native';

import { Background, Container, Text } from './styles';

interface Props extends ModalProps {
  isVisible: boolean;
  setIsVisible: (a: boolean) => void;
}

export default function ModalLoading({
  isVisible,
  setIsVisible,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={() => {
        setIsVisible(!isVisible);
      }}
      {...rest}
    >
      <Background>
        <Container>
          <ActivityIndicator color='#414046' size="large" />
          <Text style={{color: '#414046'}}>Aguarde.</Text>
        </Container>
      </Background>
    </Modal>
  );
}

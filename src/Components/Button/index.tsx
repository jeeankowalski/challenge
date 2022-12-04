import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonElement, Label, Icon } from './styles';

interface Props extends TouchableOpacityProps {
  label: string;
  icon?: string;
  transparent?: boolean;
}

export default function Button({ label, icon, transparent, ...rest }: Props) {
  return (
    <Container>
      <ButtonElement transparent={transparent || false} {...rest}>
        {!!icon && <Icon name={icon} transparent={transparent || false} />}
        <Label transparent={transparent || false}>{label}</Label>
      </ButtonElement>
    </Container>
  );
}

Button.defaultProps = {
  transparent: false,
  icon: '',
};

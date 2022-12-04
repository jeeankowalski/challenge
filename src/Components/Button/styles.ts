import styled, { css } from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacityProps } from 'react-native';

interface IElementProps {
  transparent: boolean;
}

interface IButtonElementProps extends TouchableOpacityProps {
  transparent: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;

export const ButtonElement = styled.TouchableOpacity<IButtonElementProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 3px;
  background-color: #414046;
  ${props =>
    props.transparent &&
    css`
      background-color: transparent;
    `}

  ${props =>
    props.disabled &&
    css`
      background-color: #E3E2E2;
    `}
`;

export const Label = styled.Text<IElementProps>`  
  font-size: 16px;
  color: #fff;

  ${props =>
    props.transparent &&
    css`
      color: #414046;
    `}
`;

export const Icon = styled(FontAwesome5) <IElementProps>`
  margin-right: 10px;
  font-size: 16px;
  color: #fff;

  ${props =>
    props.transparent &&
    css`
      color: #414046;
    `}
`;

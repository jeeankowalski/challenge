import styled, { css } from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface InputContainerProps {
  isFocused: boolean;
}

export const Container = styled.View`
  display: flex;
  width: 100%;
  height: 55px;
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #414046;
`;

export const InputContainer = styled.View<InputContainerProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 36px;
  border: 1px solid #bbbbbb;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: none;

  ${props =>
    props.isFocused &&
    css`
      box-shadow: 0px 1px 3px #0000005a;
      border-color: #727272;
      elevation: 6;
    `}
`;

export const Icon = styled(FontAwesome5)`
  font-size: 18px;
  width: 25px;
  margin-left: 8px;
  color: #414046;
`;

export const IconClear = styled(FontAwesome)`
  font-size: 18px;
  width: 25px;
  color: #414046;
`;

export const InputElement = styled.TextInput`
  flex: 1;
  width: 100%;
  height: 36px;  
  font-size: 16px;
  color: #414046;
  padding: 0 5px;
`;

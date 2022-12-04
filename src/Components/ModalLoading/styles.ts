import styled, { css } from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #00000053;
`;

export const Container = styled.View`
  background-color: #fff;
  border-radius: 3px;
  padding: 15px;
  align-items: center;
  max-height: 600px;
  width: 200px;

  ${css`
    box-shadow: 0px 1px 3px #0000005a;
    border-color: #727272;
    elevation: 6;
  `}
`;

export const Text = styled.Text`  
  font-size: 18px;
  margin-top: 10px;
  color: #414046;
`;

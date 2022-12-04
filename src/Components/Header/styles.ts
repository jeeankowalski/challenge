import styled from "styled-components/native";

import Entypo from 'react-native-vector-icons/Entypo';

export const MenuIcon = styled(Entypo)`
  color: #000;
`;

export const Container = styled.View`
  background-color: #fff;
  padding: 5px 10px 5px 10px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleText = styled.Text`
  flex: 1;
  font-weight: 400;
  font-size: 18px;
  margin-left: 10px;
  color: #000;
`;

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const UserText = styled.Text`
  font-size: 16px;
  color: #000;
  margin-left: 12px;
`;
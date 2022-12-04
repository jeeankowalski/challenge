import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;  
  padding: 0 20px;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  border-bottom-width: 1px;
  border-bottom-color: #e3e2e2;
  padding: 8px 12px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const TopIcon = styled(MaterialCommunityIcons) `
  margin-right: 5px;
  align-self: center;
  color: #414046;
`;

export const TopText = styled.Text`
  font-size: 18px;
  color: #414046;
`;

export const ItemContainer = styled.View`
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  border-bottom-width: 1px;
  border-bottom-color: #e3e2e2;
  padding: 8px 12px;
  margin-bottom: 5px;
`;

export const ItemTitle = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: #000
`;

export const ItemSubSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemSubSectionText = styled.Text`
  font-size: 12px;
  color: #414046;
`;

export const ItemUpdatedAtContainer = styled.View`
  flex-direction: row;  
  align-items: center;
  color: #414046;
`;

export const ItemUpdatedIcon = styled(Entypo)`
  margin-right: 3px;
`;
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;  
  padding: 0 20px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  border-bottom-width: 1px;
  border-bottom-color: #e3e2e2;
  padding: 8px 12px;
  margin-bottom: 5px;
`;

export const ItemContainerText = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const ItemTitle = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: #000;
`;

export const ContainerAddRepo = styled.View`
  flex-direction: row;
  margin-top: 8px;
  align-items: center;
  justify-content: space-between;
  
`;

export const ContainerInput = styled.View`
  width: 90%;  
`;

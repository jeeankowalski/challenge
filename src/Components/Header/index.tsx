import React from 'react';
import { DrawerHeaderProps } from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAppSelector } from '../../hooks';
import { selectUser } from '../../userSlice';
import { Image, Text } from 'react-native';


import { Container, MenuIcon, TitleContainer, TitleText, UserContainer, UserText } from './styles';
import { TouchableOpacity } from 'react-native';

const Header = (props: DrawerHeaderProps) => {
  const userData = useAppSelector(selectUser);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('@reactjsChallenge:username');
    await AsyncStorage.removeItem('@reactjsChallenge:repos');

    props.navigation.navigate('Login');
  }

  return (
    <Container>
      <UserContainer>
        <Image source={{uri: userData.avatar_url}} style={{width: 50, height: 50, borderRadius: 50}}></Image>
        <UserText>Olá, {userData.name}!</UserText>
      </UserContainer>
      
      <TitleContainer>
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <MenuIcon name='menu' size={28}/>
        </TouchableOpacity>
        <TitleText>{props.route.name}</TitleText>     
        <TouchableOpacity onPress={() => handleLogout()}>
          <MenuIcon name='log-out' size={20}/>
        </TouchableOpacity>
      </TitleContainer> 
    </Container>
  );

}

export default Header;
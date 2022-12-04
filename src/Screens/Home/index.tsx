import React, { useEffect, useState } from 'react';
import { Text, FlatList, RefreshControl } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { useAppSelector } from '../../hooks';
import { selectUser } from '../../userSlice';

import api from '../../services/api';

import formatDate from '../../Util/formatDate';

import { 
  Container, 
  TopContainer,
  TopIcon,
  TopText,
  ItemContainer, 
  ItemTitle, 
  ItemSubSection, 
  ItemSubSectionText, 
  ItemUpdatedIcon, 
  ItemUpdatedAtContainer 
} from './styles';

interface IRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  created_at: Date;
  updated_at: Date;
}

type RootDrawerParamList = {
  Login: undefined;
  Home: undefined;
  Favorites: undefined;
};

type HomeScreenNavigationProps = DrawerNavigationProp<RootDrawerParamList,'Home'>;

type HomeProps = {
  navigation: HomeScreenNavigationProps;
}

const renderItem = ({ item }: { item: IRepo }) => {
  return (
    <ItemContainer>
      <ItemTitle>{item.name}</ItemTitle>
      <ItemSubSection>
        <ItemSubSectionText>{item.language}</ItemSubSectionText>
        <ItemUpdatedAtContainer>
          <ItemUpdatedIcon name='back-in-time'/>
          <ItemSubSectionText>{formatDate(item.created_at)}</ItemSubSectionText>
        </ItemUpdatedAtContainer>
      </ItemSubSection>
      <Text style={{color: '#414046'}}>{item.description}</Text>
    </ItemContainer>
  );
};

const Home = ({ navigation }: HomeProps) => {
  const userData = useAppSelector(selectUser);

  const [repos, setRepos] = useState<Array<IRepo>>();
  const [isFetching, setIsFetching] = useState(false);

  const getRepos = async () => {
    setIsFetching(true);
    const response = await api.get(`https://api.github.com/users/${userData.login}/repos`);

    setRepos(response.data);
    setIsFetching(false);
  };

  useEffect(()=>{
    getRepos();
  },[]);

  if (isFetching) {
    return (
      <Container>
        <Text>Aguarde...</Text>
      </Container>
    );
  }

  return (
    <Container>      
      <TopContainer>
        <TopIcon name='source-repository-multiple' size={16}/>
        <TopText>Meus repositórios públicos</TopText>
      </TopContainer>
      <FlatList
        data={repos}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        refreshControl={
          <RefreshControl
            enabled
            refreshing={isFetching}
            onRefresh={getRepos}
          />
        }
      />
    </Container>
  );
}

export default Home;
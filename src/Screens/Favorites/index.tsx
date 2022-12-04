import { DrawerNavigationProp } from '@react-navigation/drawer';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Input from '../../Components/Input';

import Entypo from 'react-native-vector-icons/Entypo';

import { Container, ItemContainer, ItemContainerText, ItemTitle, ContainerInput, ContainerAddRepo } from './styles';
import api from '../../services/api';
import { AxiosError } from 'axios';
import ModalLoading from '../../Components/ModalLoading';

interface IRepo {
  id: number;
  name: string;
  full_name: string;
}

type RootDrawerParamList = {
  Login: undefined;
  Home: undefined;
  Favorites: undefined;
};

type FavoritesScreenNavigationProps = DrawerNavigationProp<RootDrawerParamList,'Home'>;

type FavoritesProps = {
  navigation: FavoritesScreenNavigationProps;
}

const Favorites = ({ navigation }: FavoritesProps) => {
  const [repos, setRepos] = useState<Array<IRepo>>([]);
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [inputRepoValue, setInputRepoValue] = useState('');

  useEffect(() => {
    const loadData = async () => {      
      const reposStr = await AsyncStorage.getItem('@reactjsChallenge:repos');

      if (reposStr){
        const reposData = JSON.parse(reposStr) as IRepo[];

        setRepos(reposData);
      }      
    }

    loadData();
  });

  const handleAddRepo = useCallback(async () => {
    try {
      setIsLoadingModal(true);
      const response = await api.get(`https://api.github.com/repos/${inputRepoValue}`);

      const {id, name, full_name} = response.data;

      const finded = repos.find(item => item.id === id);

      if (finded) {
        Alert.alert('Atenção','Repositório já adicionado.');
        return;
      }

      const newRepos = [{id, name, full_name}, ...repos];

      await AsyncStorage.setItem('@reactjsChallenge:repos', JSON.stringify(newRepos));

      setIsLoadingModal(false);

      setRepos(newRepos);
      setInputRepoValue('');
    } catch (error) {
      setIsLoadingModal(false);
      
      const err = error as AxiosError;

      if (err.response?.status === 404)
        return Alert.alert('Atenção', `Repositório não encontrado.`);  

      Alert.alert('Atenção', `Não foi possível buscar repositório.\n\n${err.message}`);
    }    
  },[inputRepoValue]);

  const handleRemoveRepo = async (id: Number) => {
    setIsLoadingModal(true);

    const newRepos = repos.filter(item => item.id !== id);

    await AsyncStorage.setItem('@reactjsChallenge:repos', JSON.stringify(newRepos)); 

    setIsLoadingModal(false);

    setRepos(newRepos);
  }

  const renderItem = ({ item }: { item: IRepo }) => {
    return (
      <ItemContainer>
        <ItemContainerText>
          <ItemTitle>{item.name}</ItemTitle>
          <Text style={{color: '#414046'}}>{item.full_name}</Text>
        </ItemContainerText>
        <TouchableOpacity onPress={()=> handleRemoveRepo(item.id)}>
          <Entypo name='trash' size={16} style={{color: '#414046'}}/>
        </TouchableOpacity>
      </ItemContainer>
    );
  }
  
  return (
    <Container>
      <ContainerAddRepo>
        <ContainerInput>
          <Input 
            label='Repositório' 
            clearButton 
            placeholder='username/repo' 
            value={inputRepoValue}
            onChangeText={newText => setInputRepoValue(newText)}
          />
        </ContainerInput>

        <TouchableOpacity onPress={()=> handleAddRepo()}>
          <Entypo name='check' size={22} style={{color: '#000'}}/>
        </TouchableOpacity>
      </ContainerAddRepo>
      
      <FlatList
        data={repos}
        renderItem={renderItem}
        keyExtractor={item => item.name}        
      />

      <ModalLoading
        isVisible={isLoadingModal}
        setIsVisible={setIsLoadingModal}
      />
    </Container>
  );
};

export default Favorites;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Favorites from '../Screens/Favorites';

import Header from '../Components/Header';

const Drawer = createDrawerNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Login" 
        screenOptions={{
          header: (props) => <Header {...props} />,          
          drawerActiveTintColor: '#FFF',
          drawerActiveBackgroundColor: '#414046',          
        }}
      >
        <Drawer.Screen 
          name="Login" 
          component={Login} 
          options={{            
            drawerItemStyle: { display: 'none' },   
            headerShown: false,
            unmountOnBlur: true,        
          }}
        />
        <Drawer.Screen 
          name="Home" 
          component={Home} 
          options={{
            unmountOnBlur: true
          }}
        />      
        <Drawer.Screen 
          name="Favorites" 
          component={Favorites} 
          options={{
            unmountOnBlur: true,
            title: 'Favoritos'
          }}          
        />   
      </Drawer.Navigator>
    </NavigationContainer>  
  );
}

export default AppRoutes;
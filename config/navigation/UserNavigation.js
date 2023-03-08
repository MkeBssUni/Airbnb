import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
//Importar los stacks
import HomeUserStack from '../stack/user/HomeUserStack'
import ProfileStack from '../stack/user/ProfileStack'
import RentsStack from '../stack/user/RentsStack'

const Tab = createBottomTabNavigator ();

export default function UserNavigation(props){
    const {user} = props;
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='profile'
                screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color),
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
                headerShown: false
            })}
            >

                <Tab.Screen
                    name="userHome"
                    options={{title:"Inicio"}}
                    component={HomeUserStack}
                />
                <Tab.Screen
                    name="rents"
                    options={{title:"Sentas"}}
                    component={RentsStack}
                />
                <Tab.Screen
                    name="userProfile"
                    options={{title:"Perfil"}}
                    component={ProfileStack}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
      case "userHome":
        iconName = "home";
        break;
      case "rents":
        iconName = "currency-usd";
        break;
      case "userProfile":
        iconName = "account-circle";
        break;
    }
  
    return (
      <Icon
      type='material-community'
      name={iconName}
      size={22}
      color={color}
      />)
  };
  

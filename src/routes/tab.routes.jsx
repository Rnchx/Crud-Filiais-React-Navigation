import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Form from "../screens/Form";
import Schools from "../screens/Escolas";
import { mockedBranchs } from "../data/branchs/data";

import schoolsRepository from "../models/Schools/Schools";

const schools = schoolsRepository.getAll();

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Inicial",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Tab.Screen
        name="Schools"
        component={ Schools}
        initialParams={{ schools }}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="school"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Escolas",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ data: mockedBranchs }}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
             name="school-circle-exclamation"
              size={24}
               color={focused ? "#131313" : "#D6D6D6"} />
          ),
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Tab.Screen
        name="Form"
        component={Form}
        initialParams={{ school: null, edit: false }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Cadastro",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
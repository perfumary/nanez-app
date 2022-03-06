import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeView from "./home";
import MypageView from "./mypage";
import SettingView from "./setting";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const AppRouter: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="home"
        component={HomeView}
        options={{
          tabBarIcon: () => <FontAwesome name="home" size={20} />,
        }}
      />
      <Tab.Screen
        name="setting"
        component={SettingView}
        options={{
          tabBarIcon: () => <FontAwesome name="gear" size={20} />,
        }}
      />
      <Tab.Screen
        name="mypage"
        component={MypageView}
        options={{
          tabBarIcon: () => <Ionicons name="person" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRouter;

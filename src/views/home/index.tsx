import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import MainView from "./main";
import BannerView from "./main/bannerLanding";
import Header from "./main/components/Header";

const HomeStack = createNativeStackNavigator();
const HomeView: React.FC = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="main"
      screenOptions={{headerShown: false}}>
      <HomeStack.Group screenOptions={{header: Header, headerShown: true}}>
        <HomeStack.Screen name="main test" component={MainView} />
        <HomeStack.Screen name="banner" component={BannerView} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

export default HomeView;

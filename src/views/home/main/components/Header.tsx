import {NativeStackHeaderProps} from "@react-navigation/native-stack";
import React from "react";
// import {SafeAreaView, Text, View} from "react-native";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {TouchableWithoutFeedback} from "react-native";

const Header: React.FC<NativeStackHeaderProps> = ({navigation}) => {
  const canGoback = navigation.canGoBack();
  const handleClick = () => navigation.goBack();
  return (
    <StyledHeader>
      {canGoback && (
        <Goback>
          <TouchableWithoutFeedback onPress={handleClick}>
            <Ionicons name="arrow-back" size={26} />
          </TouchableWithoutFeedback>
        </Goback>
      )}
      <Title>Na'Nez</Title>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 103px;
`;
const Title = styled.Text`
  color: #e7862d;
  font-weight: 600;
  font-size: 24px;
`;
const Goback = styled.View`
  position: absolute;
  left: 20px;
  bottom: 15px;
`;

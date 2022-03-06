import React from "react";
import {FlatList, ImageSourcePropType, Text, View} from "react-native";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import BrandCard from "./BrandCard";
const jomalone = require("../../../../assets/images/jomalone.png");
const byredo = require("../../../../assets/images/byredo.png");
const diptyque = require("../../../../assets/images/diptyque.png");
const data: {img: ImageSourcePropType; name: string}[] = [
  {
    img: jomalone,
    name: "조말론",
  },
  {
    img: byredo,
    name: "바이레도",
  },
  {
    img: diptyque,
    name: "딥디크",
  },
  {
    img: jomalone,
    name: "조말론",
  },
  {
    img: byredo,
    name: "바이레도",
  },
  {
    img: diptyque,
    name: "딥디크",
  },
];
const RecommendBrand: React.FC = () => {
  return (
    <View style={{marginBottom: 24}}>
      <Header>
        <Title>지금, 사랑받고 있는 브랜드</Title>
        <ShowAll>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Text style={{fontSize: 12, color: "#333333"}}>전체보기</Text>
            <AntDesign
              name="right"
              color="#333333"
              size={12}
              style={{marginLeft: 4}}
            />
          </View>
        </ShowAll>
      </Header>
      <FlatList<{img: ImageSourcePropType; name: string}>
        data={data}
        contentContainerStyle={{
          paddingHorizontal: 12,
        }}
        renderItem={({item}) => <BrandCard item={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default RecommendBrand;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 16px;
  margin-bottom: 16px;
`;
const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
const ShowAll = styled.TouchableWithoutFeedback``;

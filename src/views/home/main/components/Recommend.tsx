import React from "react";
import {FlatList, ImageSourcePropType} from "react-native";
import styled from "styled-components/native";
import RecommendCard from "./RecommendCard";
const imagePath1 = require("../../../../assets/images/perfume01.png");
const imagePath2 = require("../../../../assets/images/perfume02.png");

const data: {brand: string; name: string; img: ImageSourcePropType}[] = [
  {
    brand: "킬리안",
    name: "애플 브랜디 온 더 락스",
    img: imagePath1,
  },
  {
    brand: "에따 리브르 도랑쥬",
    name: "Hermann A Mes Cotes Me Paraissait Une Ombre Etat Libre d'Orange",
    img: imagePath2,
  },
  {
    brand: "킬리안",
    name: "애플 브랜디 온 더 락스",
    img: imagePath1,
  },
  {
    brand: "에따 리브르 도랑쥬",
    name: "Hermann A Mes Cotes Me Paraissait Une Ombre Etat Libre d'Orange",
    img: imagePath2,
  },
  {
    brand: "킬리안",
    name: "애플 브랜디 온 더 락스",
    img: imagePath1,
  },
  {
    brand: "에따 리브르 도랑쥬",
    name: "Hermann A Mes Cotes Me Paraissait Une Ombre Etat Libre d'Orange",
    img: imagePath2,
  },
];
const Recommend: React.FC = () => {
  return (
    <Container>
      <Title>이런 향수는 어떠세요?</Title>
      <FlatList<{brand: string; name: string; img: ImageSourcePropType}>
        contentContainerStyle={{
          paddingHorizontal: 12,
        }}
        horizontal
        data={data}
        renderItem={({item}) => <RecommendCard item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default Recommend;

const Container = styled.View`
  margin-bottom: 40px;
`;

const Title = styled.Text`
  font-size: 20px;
  padding: 0 16px;
  font-weight: 700;
  margin-bottom: 16px;
`;

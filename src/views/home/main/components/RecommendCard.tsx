import React from "react";
import {ImageSourcePropType, Text} from "react-native";
import styled from "styled-components/native";

interface Props {
  item: {brand: string; name: string; img: ImageSourcePropType};
}

const RecommendCard: React.FC<Props> = ({item}) => {
  return (
    <Container>
      <PerfumeImage source={item.img} />
      <Card>
        <Brand>{item.brand}</Brand>
        <Name numberOfLines={2}>{item.name}</Name>
      </Card>
    </Container>
  );
};

export default RecommendCard;
const PerfumeImage = styled.Image`
  height: 120px;
  position: absolute;
  width: 120px;
  z-index: 1;
`;
const Card = styled.View`
  padding: 110px 12px 0;
  margin: 0 8px;
  width: 160px;
  height: 190px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: #efefef;
  background-color: #fafafd;
`;
const Container = styled.View`
  padding-top: 16px;
  align-items: center;
`;
const Brand = styled.Text`
  font-size: 11px;
  color: #666666;
  margin-bottom: 6px;
`;
const Name = styled.Text`
  color: #333333;
  font-size: 14px;
`;

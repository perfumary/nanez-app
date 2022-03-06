import React from "react";
import {Image, ImageSourcePropType, Text, View} from "react-native";
import styled from "styled-components/native";

interface Props {
  item: {img: ImageSourcePropType; name: string};
}

const BrandCard: React.FC<Props> = ({item}) => {
  return (
    <Container>
      <BrandImage>
        <Image
          style={{width: 90, height: 48}}
          resizeMode={"contain"}
          source={item.img}
        />
      </BrandImage>
      <Text>{item.name}</Text>
    </Container>
  );
};

export default BrandCard;

const Container = styled.View`
  padding-top: 16px;
  align-items: center;
  margin: 0 8px;
  align-items: center;
`;

const BrandImage = styled.View`
  width: 120px;
  height: 60px;
  border: 1px solid #e8eaf0;
  border-radius: 8px;
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
`;

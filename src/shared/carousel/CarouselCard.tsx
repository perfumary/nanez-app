import React, {useState} from "react";
import {Image, ImageSourcePropType, View, ViewStyle} from "react-native";
import styled from "styled-components/native";

interface Props {
  item: {value: string; img: ImageSourcePropType};
  style: ViewStyle;
}

const CarouselCard: React.FC<Props> = ({item, style}) => {
  return (
    <PageItem style={style}>
      <Banner source={item.img} />
    </PageItem>
  );
};

export default CarouselCard;

const PageItem = styled.View`
  justify-content: center;
  align-items: center;
`;
const Banner = styled.Image`
  width: 100%;
  height: 240px;
`;

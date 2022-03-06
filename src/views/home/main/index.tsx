import React, {useState} from "react";
import {Dimensions, Text, TouchableWithoutFeedback} from "react-native";
import styled from "styled-components/native";
import Carousel from "../../../shared/carousel";
import Ionicons from "react-native-vector-icons/Ionicons";
import Recommend from "./components/Recommend";
import RecommendBrand from "./components/Brand";
const width = Dimensions.get("window").width;
const imagePath = require("../../../assets/images/banner.png");

const MainView: React.FC = () => {
  const pages = Array.from({length: 5}, (_, i) => ({
    value: "carousel_" + String(i),
    img: imagePath,
  }));
  const [bannerPage, setBannerPage] = useState(0);

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Carousel pages={pages} onChange={page => setBannerPage(page)} />
      <BannerTextContainer>
        <BannerTitle>어디서 좋은 향이 나네?_{bannerPage + 1}</BannerTitle>
        <BannerText>
          오늘 나에게 맞는 향수를 찾아라!_{bannerPage + 1}
        </BannerText>
      </BannerTextContainer>
      <SearchContainer>
        <SearchBox>
          <Ionicons name="md-search-outline" size={24} color="#666666" />
          <SearchText>지금 나에게 맞는 향수를 찾아보세요</SearchText>
        </SearchBox>
      </SearchContainer>
      <Recommend />
      <RecommendBrand />
      <ButtonContainer>
        <TouchableWithoutFeedback>
          <ProducButton>
            <Text style={{fontSize: 14, fontWeight: "bold", color: "#fff"}}>
              제품 등록 요청
            </Text>
          </ProducButton>
        </TouchableWithoutFeedback>
      </ButtonContainer>
    </Container>
  );
};

export default MainView;

const BannerTextContainer = styled.View`
  padding: 16px 24px 0;
`;
const BannerTitle = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;
const BannerText = styled.Text`
  margin-top: 4px;
  font-size: 16px;
`;
const SearchContainer = styled.View`
  width: ${width}px;
  padding: 24px 16px;
`;
const SearchBox = styled.View`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: #cccccc;
  padding: 0 8px;
  flex-direction: row;
  align-items: center;
`;
const SearchText = styled.Text`
  font-size: 14px;
  color: #999999;
  margin-left: 8px;
`;

const Container = styled.ScrollView`
  background-color: #fff;
`;
const ButtonContainer = styled.View`
  padding: 0 16px;
  margin-bottom: 40px;
`;
const ProducButton = styled.View`
  height: 40px;
  background: #e7862d;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

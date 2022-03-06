import React, {ReactElement, useState} from "react";
import {
  Dimensions,
  FlatList,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import styled from "styled-components/native";
import CarouselCard from "./CarouselCard";
const initialScreenWidth = Math.round(Dimensions.get("window").width);

interface Props {
  pageWidth?: number;
  gap?: number;
  offset?: number;
  pages: {
    value: string;
    img: ImageSourcePropType;
  }[];
  onChange?: (page: number) => void;
}

const Carousel: React.FC<Props> = ({
  pageWidth = initialScreenWidth,
  offset = 0,
  gap = 0,
  pages,
  onChange,
}) => {
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setPage(newPage);
    if (onChange) onChange(newPage);
  };
  const [page, setPage] = useState(0);
  return (
    <Container>
      <FlatList<{img: ImageSourcePropType; value: string}>
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={item => `page__${item.value}`}
        onScroll={handleScroll}
        pagingEnabled
        renderItem={({item}) => (
          <CarouselCard
            item={item}
            style={{
              width: pageWidth,
              marginHorizontal: gap / 2,
            }}
          />
        )}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />

      <IndicatorWrapper>
        {Array.from({length: pages.length}, (_, i) => i).map(i => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </IndicatorWrapper>
    </Container>
  );
};

export default Carousel;

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const Indicator = styled.View<{focused: boolean}>`
  margin: 0px 4px;
  background-color: #333333;
  opacity: ${props => (props.focused ? "1" : "0.5")};
  width: ${props => (props.focused ? "12px" : "6px")};
  height: 6px;
  border-radius: 3px;
`;

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  position: absolute;
  bottom: 12px;
`;

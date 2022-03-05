import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type RootTabsStackList = {
    ["Home"]: undefined,
}

export type HomeScreenType = BottomTabScreenProps<RootTabsStackList, "Home">
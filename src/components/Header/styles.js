import { StatusBar }from "react-native";
import  styled  from "styled-components/native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22 : 64;

export const Container = styled.View`
  background-color: #4a1170;
  padding-top: ${statusBarHeight}px;
  flex-direction: row;
  padding-left: 16px;
  padding-right:16px ;
  padding-bottom: 44px;
`;

export const ButtonUser = styled.TouchableOpacity` 
  width: 44px;
  height: 44px;
  background-color: rgba(255,255,255, 0.5);
  justify-content: center;
  align-items: center;
  border-radius: 22px ;
`;
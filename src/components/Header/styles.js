import { StatusBar }from "react-native";
import  styled  from "styled-components/native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22 : 64;

export const Container = styled.View`
  background-color: #8000ff;
  padding-top: ${statusBarHeight}px;
  flex-direction: row;
  padding-left: 16px;
  padding-right:16px ;
  padding-bottom: 44px;
`;

export const Contents = styled.View` 
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserName = styled.Text` 
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const ButtonUser = styled.TouchableOpacity` 
  width: 44px;
  height: 44px;
  background-color: rgba(255,255,255, 0.5);
  justify-content: center;
  align-items: center;
  border-radius: 22px ;
`;
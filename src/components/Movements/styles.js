import  styled  from "styled-components/native";


export const Container = styled.TouchableOpacity`
  flex: 1;
  margin-bottom: 24px;
  border-bottom-width: 0.5px;
  border-bottom-color: #DADADA;
`;
export const Date = styled.Text`
  color: #DADADA;
  font-weight: bold;
`;
export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2px;
  margin-bottom: 8px;
  
`;
export const Label = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
export const Value = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #2ecc71 ;
`;
export const Expenses = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #e74c3c;
`;
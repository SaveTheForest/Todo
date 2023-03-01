import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f7f8fa;
`;
export const Tittle = styled.Text`
  color: #000;
  font-size: 44px;
  font-weight: bold;
  padding: 35px;
`;
export const ButtonNewTask = styled.TouchableOpacity`
  align-self: flex-end;
  margin: 25px;
`;
export const ContainerNewTask = styled.View`
  width: 100%;
  height: 135px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding-left: 15px;
  padding-top: 15px;
  align-self: center;
  background-color: #424242;
`;
export const TextNewTask = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: bold;
`;

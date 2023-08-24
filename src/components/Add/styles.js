import styled from "styled-components/native";

export const AddStyle = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 9999px;
  background-color: #515CC6;
`

export const AddText = styled.Text`
  color: #FFFFFF;
  font-size: ${({theme}) => theme.FONT_SIZE.XL};
`
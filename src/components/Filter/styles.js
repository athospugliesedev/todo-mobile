import { TextInput } from "react-native";
import styled from "styled-components/native";

export const FilterStyle = styled.TextInput`
width: 75%;
  font-size: 18px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  color: ${({theme}) => theme.COLORS.FONTCOLOR};
  height: 56px;
  border-radius: 8px;
`
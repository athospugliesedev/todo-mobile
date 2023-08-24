import styled from "styled-components/native";

export const Container = styled.View`
flex: 1,

`

export const TitleStyled = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }) => theme.COLORS.FONTCOLOR};
`
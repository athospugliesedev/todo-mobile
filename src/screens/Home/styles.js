import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    padding: 24px;
`

export const Divider = styled.View`
    width: 100%;
    margin: 10px 0px 10px 0px;
    height: 1px;
    border-bottom-width: 1;
    border-bottom-color: ${({theme}) => theme.COLORS.CLEAR};
`

export const InputArea = styled.View`
flex-direction: row;
justify-content: space-between;
`

export const Card = styled.View`
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    border-width: 1px;
    border-color: ${({theme}) => theme.COLORS.GRAY_600};
    border-radius: 8px;
    padding: 10px;
    margin-top: 5px;
`

export const CardTitle = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.LG};
    color: ${({theme}) => theme.COLORS.FONTCOLOR};

`
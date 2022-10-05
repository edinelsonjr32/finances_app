import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
    background-color: ${({theme})=>theme.colors.background};
`;

export const Title = styled.Text`
    font-size: 22px;
    color: ${({theme})=>theme.colors.title};
    font-weight: bolder;
`; 


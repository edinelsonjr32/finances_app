import styled from "styled-components/native";
//Para se adequar em qualquer tela nós podemosusar uma biblioteca: react-native-responsive-fontsize
//npm install react-native-responsive-fontsize --save
import { RFValue } from "react-native-responsive-fontsize";
import { RFPercentage } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";
export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.background};
`;
export const Header = styled.View`
    width: 100%;
    background-color: ${({theme})=>theme.colors.primary};
    height: ${RFPercentage(42)}px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;
    //cima-baixo direita-esquerda
    padding: 0px 24px;
`;
export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;
export const User = styled.View`
    margin-left: 17px;
`;
export const UserGreeting = styled.Text`
    color: ${({theme})=>theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme})=>theme.fonts.regular};
`;
export const UserName = styled.Text`
     color: ${({theme})=>theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme})=>theme.fonts.bold};
`;
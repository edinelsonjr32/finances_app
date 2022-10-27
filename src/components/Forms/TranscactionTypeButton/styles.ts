import styled , {css} from "styled-components/native";
import {Feather} from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

interface IconsProps {
    type: 'up'| 'down';
    
}
interface ContainerProps {
    isActive: boolean;
    type: 'up'| 'down';
}
export const Container = styled.TouchableOpacity<ContainerProps>`
    width: 48%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-width: ${({isActive}) => isActive ? 0 : 1.5}px;
    border-style: solid;
    border-color: ${({theme})=>theme.colors.text};
    padding: 16px;
    border-radius: 5px;
    ${({isActive, type})=> isActive && type === 'up' && css`
        background-color: ${({theme})=> theme.colors.success_light};
    `};
    ${({isActive, type})=> isActive && type === 'down' && css`
        background-color: ${({theme})=> theme.colors.attention_light};
    `};

`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme})=>theme.fonts.regular};
`;


export const Icon = styled(Feather)<IconsProps>`
    
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
    color: ${({theme, type})=> 
        type === 'up' ? theme.colors.success : theme.colors.attention
    }
`;
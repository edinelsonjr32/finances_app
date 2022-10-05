import React from "react";
import Dashboard from "./src/screens/Dashboard";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";

import AppLoading from "expo-app-loading";
//para instalar a nossa font personalizada:
/**
 * 
 * expo install expo-font @expo-google-fonts/poppins
 */

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

export default function App() {
  //precisamos garantir que seja baixado a fonte do celular do usuário
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  //enquanto nao for carregado, fica na tela de splash

  /**
   * Precisamos instalar a dependencia que trabalha com o carregamento:
   * expo install expo-app-loading
   */
  if(!fontLoaded){
    return <AppLoading />
  }

  return (
    
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

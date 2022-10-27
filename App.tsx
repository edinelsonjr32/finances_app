import React, { useCallback } from "react";
import Dashboard from "./src/screens/Dashboard";
import Register from "./src/screens/Register";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";
import * as SplashScreen from "expo-splash-screen";

//para instalar a nossa font personalizada:

import { StatusBar } from "expo-status-bar";
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
   const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      // This tells the splash screen to hide immediately
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) return null;

  return (
    
    <ThemeProvider theme={theme}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <Register/>
    </ThemeProvider>
  );
}

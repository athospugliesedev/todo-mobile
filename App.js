import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home/index.jsx';
import { ThemeProvider } from 'styled-components';
import { useFonts, Inter_500Medium, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

import theme from './theme';
import { ActivityIndicator } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light'/>
       { fontsLoaded ? <Home /> : <ActivityIndicator color={theme.COLORS.GRAY_500}/>}
    </ThemeProvider>
   
  );
}

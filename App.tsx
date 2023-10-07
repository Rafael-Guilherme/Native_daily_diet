import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components'
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans'

import theme from './src/theme'
import Home from '@screens/home';
import { Text } from 'react-native';


export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar  
        style='light'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? 
        <Home /> : 
        <Text>Fontes não carregaram</Text>}
    </ThemeProvider>
  );
}

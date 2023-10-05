import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components'
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import theme from './src/theme'
import { Container, TextField } from './styles';

export default function App() {
  const [fontsLoader] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar  
        style='light'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoader ? 
        <Container>
          <TextField>Hello World by Rafael!</TextField> 
        </Container> :   
        <TextField>Fontes não carregaram</TextField>}
    </ThemeProvider>
  );
}

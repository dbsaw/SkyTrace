import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import { Layout } from './components/Layout';
import { EchoInput } from './components/EchoInput';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <EchoInput />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

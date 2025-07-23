import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './font-style.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
import './lib/i18n/i18n.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = extendTheme({
  fonts: {
    body: 'Roboto',
  },
  components: {
    Heading: {
      heading: {
        sizes: {
          xl: {
            fontFamily: 'Roboto Mono',
          },
          lg: {
            fontFamily: 'Roboto Mono',
          },
        },
      },
    },
  },
  colors: {
    text: '#FFFFFF',
  },
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './font-style.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = extendTheme({
  fonts: {
    body: 'Roboto'
  },
  components: {
    Heading: {
      heading: {
        sizes: {
          xl: {
            fontFamily: 'Roboto Mono'
          },
          lg: {
            fontFamily: 'Roboto Mono'
          }
        }
      }
    }
  },
  colors: {
    text: '#FFFFFF'
  }
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

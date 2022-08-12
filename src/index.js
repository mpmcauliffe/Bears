import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, } from 'styled-components'
import { GlobalStyle, } from './themes/globalStyle'
import { Theme, } from './themes/Theme'
import './themes/fonts.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
    document.getElementById('root')
)

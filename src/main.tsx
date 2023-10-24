import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider, } from 'styled-components'
import { GlobalStyle, } from './themes/globalStyle'
import { Theme, } from './themes/Theme'
import './themes/fonts.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
)

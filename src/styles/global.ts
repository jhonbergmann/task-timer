import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme}) => theme['stone-500']};
  }

  body {
    background: ${({theme}) => theme['slate-900']};
    color: ${({theme}) => theme['slate-300']};
    -webkit-font-smoothing: antialiased;
    min-width: 1300px;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`

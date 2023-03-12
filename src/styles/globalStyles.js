import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Trirong", serif;
  }
  body {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.textColor};
    padding: 16px 32px;
  } 
`

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
      padding:0;
      margin:0;
      outline: 0;
      box-sizing: border-box;
  }
  body {
      background: ${({ theme }) => theme.colors.text_dark};
      color: ${({ theme }) => theme.colors.text};
      font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
      transition: all 0.50s linear;
    }
`;

export default GlobalStyles;

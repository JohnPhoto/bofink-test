import { createGlobalStyle } from 'styled-components';
import { styledNormalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${styledNormalize}
html { font-size: 62.5%; }
body {
  font-family: sans-serif;
  font-size: 1.6rem;
}
`;

export default GlobalStyle;

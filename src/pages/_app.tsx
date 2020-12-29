import type { AppProps /*, AppContext */ } from 'next/app'

import { GlobalStyle } from '../styles/globals';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default App;

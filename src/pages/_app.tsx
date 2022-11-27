import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Delivery de Comida e Mercado - iFood</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
      )
    </>
  );
}

export default App;

import { css, Global } from "@emotion/react";
import { ThemeDefault } from "./emotion";
import { theme } from "./theme";

const globalStyle = (theme: ThemeDefault) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  html {
    font-size: 62.5%;
  }
`;

export const GlobalStyles = () => <Global styles={globalStyle(theme)} />;

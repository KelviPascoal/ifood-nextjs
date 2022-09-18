import "@emotion/react";
import { theme } from "./theme";

export type ThemeDefault = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends ThemeDefault {}
}

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { render as testRender } from '@testing-library/react'
import { GlobalStyles } from "styles/GlobalStyles";

export function render(children: ReactNode) {
    return testRender(
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    )
}
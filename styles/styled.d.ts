import { theme } from './theme';
import { styled } from 'styled-components';

declare module "styled-components"

type ThemeTypes = typeof theme;

export interface ThemeProvider extends ThemeTypes {}
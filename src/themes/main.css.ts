import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, theme] = createTheme({
  color: {
    black: '#000000',
    'light gray 1': '#d9d9d9',
    'light gray 2': '#efefef',
    'light gray 3': '#f3f3f3',
  },
  animation: {
    main: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
} as const);

export const animation = style({
  transition: theme.animation.main,
});

export const hidden = style({
  clip: 'rect(0 0 0 0)',
  position: 'absolute',
  width: 0,
  height: 0,
  opacity: 0,
});

export const breakpoints = {
  mobile: '(min-width: 768px)',
  tablet: '(min-width: 1024px)',
  desktop: '(min-width: 1366px)',
} as const;

export type Space = keyof typeof theme.space;

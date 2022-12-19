import { style } from '@vanilla-extract/css';
import { theme } from '../../../themes/main.css';

export const li = style({
  marginBottom: theme.space.sm,
  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export const ul = style({
  margin: `${theme.space.sm} 0`,
});

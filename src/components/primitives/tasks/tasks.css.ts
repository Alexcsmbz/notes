import { style } from '@vanilla-extract/css';
import { theme } from '../../../themes/main.css';

export const li = style({
  marginBottom: theme.space.xs,
  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

import { style } from '@vanilla-extract/css';
import { theme, animation } from '../../../themes/main.css';

export const root = style([
  animation,
  {
    border: `1px solid ${theme.color['light gray 2']}`,
    padding: `${theme.space.xs} ${theme.space.sm}`,
    backgroundColor: theme.color['light gray 2'],
    borderRadius: theme.space.xs,
    minHeight: 32,
    selectors: {
      '&:hover, &:focus': {
        border: `1px solid ${theme.color['light gray 1']}`,
      },
    },
  },
]);

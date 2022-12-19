import { style } from '@vanilla-extract/css';
import { theme, animation } from '../../../themes/main.css';

export const root = style([
  animation,
  {
    border: `1px solid ${theme.color['light gray 1']}`,
    padding: `${theme.space.xs} ${theme.space.sm}`,
    backgroundColor: theme.color['light gray 2'],
    borderRadius: theme.space.xs,
    minWidth: 65,
    minHeight: 32,
    fontSize: 14,
    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color['light gray 1'],
      },
      '&:active': {
        backgroundColor: theme.color['light gray 3'],
      },
    },
  },
]);

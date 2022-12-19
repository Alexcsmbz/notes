import { style } from '@vanilla-extract/css';
import { theme } from '../../../themes/main.css';

export const title = style({
  fontFamily: 'cursive',
  fontSize: 32,
  textAlign: 'center',
});

export const root = style({
  background:
    'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
  paddingTop: theme.space.md,
  paddingBottom: theme.space.md,
});

export const link = style({
  textDecoration: 'none',
  color: theme.color.black,
});

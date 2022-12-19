import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  height: '100%',
  fontSize: 14,
  minWidth: 320,
  margin: 0,
});

globalStyle('html', {
  height: '100%',
  boxSizing: 'border-box',
});

globalStyle('*, *::after, *::before', {
  fontFamily: `'Roboto', sans-serif`,
  boxSizing: 'inherit',
});

globalStyle('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

globalStyle('button', {
  margin: 0,
  padding: 0,
  border: 0,
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

globalStyle('input', {
  padding: 0,
  margin: 0,
  border: 0,
  outline: 0,
  backgroundColor: 'transparent',
});

globalStyle('p, h3', {
  margin: 0,
});

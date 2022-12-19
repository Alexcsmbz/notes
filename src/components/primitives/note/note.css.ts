import { style } from '@vanilla-extract/css';
import { theme } from '../../../themes/main.css';

export const editThreeSlots = style({
  gridTemplateColumns: '1fr auto auto',
  marginBottom: theme.space.sm,
});

export const editTwoSlots = style({
  gridTemplateColumns: '1fr auto',
});

export const addTaskButton = style({
  width: 138,
});

export const createTaskInputWrapper = style({
  marginBottom: theme.space.sm,
});

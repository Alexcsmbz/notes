import { FC, memo } from 'react';
import { Task as TypeTask } from '../../../store/types';
import { Box } from '../box/box';
import { checkbox } from './task.css';

type Props = {
  onChangeDone: (params: { done: boolean; taskId: number }) => void;
} & TypeTask;

export const Task: FC<Props> = memo(({ name, done, id, onChangeDone }) => {
  return (
    <Box alignItems="center" display="grid">
      <input
        id={name}
        type="checkbox"
        checked={done}
        onChange={(e) => {
          onChangeDone({ done: e.target.checked, taskId: id });
        }}
        className={checkbox}
      />
      <label htmlFor={name}>{name}</label>
    </Box>
  );
});

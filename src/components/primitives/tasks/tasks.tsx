import { FC } from 'react';
import { ChangeTasksDone, Task as TypeTask } from '../../../store/types';
import { Task } from '../task';
import { li } from './tasks.css';

type Props = {
  tasks: TypeTask[];
  onChangeTasksDone?: ChangeTasksDone;
  noteId: number;
};

export const Tasks: FC<Props> = ({ tasks, onChangeTasksDone, noteId }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={li}>
          <Task
            onChangeDone={({ taskId, done }) => {
              onChangeTasksDone?.({ noteId, taskId, done });
            }}
            {...task}
          />
        </li>
      ))}
    </ul>
  );
};

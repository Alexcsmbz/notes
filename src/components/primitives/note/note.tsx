import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  ChangeTasksDone,
  Note as TypeNote,
  Task,
  Task as TypeTask,
} from '../../../store/types';
import { Button } from '../button';
import { Box } from '../box';
import { Tasks } from '../tasks';
import {
  addTaskButton,
  createTaskInputWrapper,
  editThreeSlots,
  editTwoSlots,
} from './note.css';
import { DebounceInput } from '../../containers/debounce-input';
import cx from 'classnames';

export type Props = {
  tasks?: Task[];
  removeNote: (id: number) => void;
  addTaskToNote?: (task: TypeTask) => void;
  edited?: boolean;
  createdTask?: TypeTask;
  setCreatedTask?: (task: TypeTask) => void;
  setEdited?: (edited: boolean) => void;
  editable?: boolean;
  onChangeName?: (params: { noteId: number; newName: string }) => void;
  onChangeTasksDone?: ChangeTasksDone;
} & TypeNote;

export const Note: FC<Props> = ({
  name,
  tasks,
  id,
  removeNote,
  addTaskToNote,
  edited,
  setEdited,
  createdTask,
  setCreatedTask,
  editable = true,
  onChangeName,
  onChangeTasksDone,
}) => {
  return (
    <Box direction="vertical" space="sm">
      <Box alignItems="baseline" direction={edited ? 'vertical' : 'horizontal'}>
        <Box
          display="grid"
          alignItems="start"
          className={editable ? editThreeSlots : editTwoSlots}
        >
          {edited ? (
            <DebounceInput
              value={name}
              onChange={(e) =>
                onChangeName?.({ noteId: id, newName: e.target.value })
              }
            />
          ) : editable ? (
            <h3>{name}</h3>
          ) : (
            <Link to={`/notes/${id}`}>
              <h3>{name}</h3>
            </Link>
          )}
          <Button onClick={() => removeNote(id)}>Remove</Button>
          {editable && (
            <Button onClick={() => setEdited?.(!edited)}>
              {edited ? 'Apply' : 'Edit'}
            </Button>
          )}
        </Box>
        {edited && (
          <Box
            display="grid"
            className={cx(editTwoSlots, createTaskInputWrapper)}
          >
            <DebounceInput
              onChange={(e) =>
                createdTask &&
                setCreatedTask?.({ ...createdTask, name: e.target.value })
              }
            />
            <Button
              className={addTaskButton}
              onClick={() => {
                createdTask && addTaskToNote?.(createdTask);
                setCreatedTask?.({ name: '', done: false, id: Date.now() });
                setEdited?.(false);
              }}
            >
              Add task
            </Button>
          </Box>
        )}
      </Box>
      <Tasks
        tasks={tasks as Task[]}
        onChangeTasksDone={onChangeTasksDone}
        noteId={id}
      />
      <hr />
    </Box>
  );
};

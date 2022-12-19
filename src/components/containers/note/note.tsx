import { memo, useState } from 'react';
import { useTasks, useNotes } from '../../../store';
import { Props, Note as NotePrimitive } from '../../primitives/note';

export const Note = memo((props: Props) => {
  const tasks = useTasks(({ tasks }) => tasks)[props.id] || [];
  const changeNoteName = useNotes(({ changeNoteName }) => changeNoteName);
  const changeTasksDone = useTasks(({ changeTasksDone }) => changeTasksDone);
  const [createdTask, setCreatedTask] = useState({
    name: '',
    done: false,
    id: Date.now(),
  });
  const [edited, setEdited] = useState(false);

  return (
    <NotePrimitive
      {...props}
      tasks={tasks}
      createdTask={createdTask}
      setCreatedTask={setCreatedTask}
      edited={edited}
      setEdited={setEdited}
      onChangeName={changeNoteName}
      onChangeTasksDone={changeTasksDone}
    />
  );
});

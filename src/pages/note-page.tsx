import { useNavigate, useParams } from 'react-router-dom';
import { Note } from '../components/containers/note';
import { Box } from '../components/primitives/box';
import { Route } from '../router/routes';
import { useNotes, useTasks } from '../store';

export const NotePage = () => {
  const { id: noteId } = useParams();
  const removeNote = useNotes(({ removeNote }) => removeNote);
  const addTaskToNode = useTasks(({ addTaskToNote }) => addTaskToNote);
  const note = useNotes(({ notes }) => notes).find(
    ({ id }) => id === Number(noteId)
  );
  const navigate = useNavigate();

  return (
    <main>
      <Box adaptiveHPaddings vPaddings="sm">
        {note && (
          <Note
            removeNote={(id) => {
              removeNote(id);
              navigate(Route.home.path);
            }}
            addTaskToNote={(task) =>
              addTaskToNode({ noteId: Number(noteId || 0), task })
            }
            {...note}
          />
        )}
      </Box>
    </main>
  );
};

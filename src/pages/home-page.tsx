import { useState } from 'react';
import { Box } from '../components/primitives/box';
import { Button } from '../components/primitives/button';
import { CreationNotePanel } from '../components/primitives/creation-note-panel';
import { Notes } from '../components/primitives/notes';
import { useNotes } from '../store';

export const HomePage = () => {
  const notes = useNotes(({ notes }) => notes);
  const addNote = useNotes(({ addNote }) => addNote);
  const removeNote = useNotes(({ removeNote }) => removeNote);
  const [noteName, setNoteName] = useState('');
  const [creation, setCreation] = useState(false);

  return (
    <main>
      <Box adaptiveHPaddings vPaddings="sm">
        <div>
          {!creation && (
            <Box display="grid" justifyContent="end">
              <Button onClick={() => setCreation(true)}>Create note</Button>
            </Box>
          )}
          {creation && (
            <CreationNotePanel
              addNote={addNote}
              setCreation={setCreation}
              noteName={noteName}
              setNoteName={setNoteName}
            />
          )}
          <hr />
          {notes.length > 0 && <Notes notes={notes} removeNote={removeNote} />}
        </div>
      </Box>
    </main>
  );
};

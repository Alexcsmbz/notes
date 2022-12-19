import { FC, memo } from 'react';
import { Note } from '../../../store/types';
import { DebounceInput } from '../../containers/debounce-input';
import { Box } from '../box';
import { Button } from '../button';
import { root } from './creation-note-panel.css';

type Props = {
  setNoteName: (name: string) => void;
  setCreation: (creation: boolean) => void;
  addNote: (note: Note) => void;
  noteName: string;
};

export const CreationNotePanel: FC<Props> = memo(
  ({ setNoteName, setCreation, addNote, noteName }) => {
    return (
      <Box className={root} display="grid">
        <DebounceInput onChange={(e) => setNoteName(e.target.value)} />
        <Button onClick={() => setCreation(false)}>Cancel</Button>
        <Button
          onClick={() => {
            addNote({ id: Date.now(), name: noteName });
            setCreation(false);
          }}
        >
          Create
        </Button>
      </Box>
    );
  }
);

import { FC, memo } from 'react';
import { Note as TypeNote } from '../../../store/types';
import { Note } from '../../containers/note';
import { li, ul } from './notes.css';

type Props = {
  notes: TypeNote[];
  removeNote: (id: number) => void;
};

export const Notes: FC<Props> = memo(({ notes, removeNote }) => (
  <ul className={ul}>
    {notes.map((note) => (
      <li key={note.id} className={li}>
        <Note removeNote={removeNote} editable={false} {...note} />
      </li>
    ))}
  </ul>
));

export type NotesStore = {
  notes: Note[];
  addNote: (note: Note) => void;
  removeNote: (id: number) => void;
  changeNoteName: (params: { noteId: number; newName: string }) => void;
};

export type TasksStore = {
  tasks: Record<Note['id'], Task[]>;
  changeTasksDone: ChangeTasksDone;
  addTaskToNote: (params: { noteId: number; task: Task }) => void;
};

export type Task = {
  id: number;
  name: string;
  done: boolean;
};

export type Note = {
  name: string;
  id: number;
};

export type ChangeTasksDone = (params: {
  taskId: number;
  noteId: number;
  done: boolean;
}) => void;

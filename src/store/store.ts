import create from 'zustand';
import { NotesStore, TasksStore } from './types';
// middleware saves data to storage
import { persist } from 'zustand/middleware';

export const useNotes = create(
  persist<NotesStore>(
    (set) => ({
      notes: [],
      addNote: (note) => set(({ notes }) => ({ notes: [...notes, note] })),
      // removes note by noteId from NotesStore &
      // removes note's tasks from TasksStore
      removeNote: (noteId) =>
        set(({ notes }) => {
          const tasks = { ...useTasks.getState().tasks };
          delete tasks[noteId];
          useTasks.setState({ tasks });
          return {
            notes: notes.filter(({ id }) => id !== noteId),
          };
        }),
      // finds note's index & change name by note's index
      changeNoteName: ({ noteId, newName }) =>
        set(({ notes }) => {
          const result = [...notes];
          const currentNoteIndex = result.findIndex(({ id }) => id === noteId);
          result[currentNoteIndex].name = newName;
          return { notes: result };
        }),
    }),
    { name: 'notes' }
  )
);

export const useTasks = create(
  persist<TasksStore>(
    (set) => ({
      tasks: {},
      // adds task to tasks array by noteId
      addTaskToNote: ({ noteId, task }) =>
        set(({ tasks }) => ({
          tasks: { ...tasks, [noteId]: [...(tasks[noteId] || []), task] },
        })),
      // finds task's index & toggle done prop by task's index
      changeTasksDone: ({ taskId, noteId, done }) =>
        set(({ tasks }) => {
          const result = { ...tasks };
          const currentTaskIndex = result[noteId].findIndex(
            ({ id }) => id === taskId
          );
          result[noteId][currentTaskIndex] = {
            ...result[noteId][currentTaskIndex],
            done,
          };
          return { tasks: result };
        }),
    }),
    { name: 'tasks' }
  )
);

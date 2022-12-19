import { HomePage } from '../pages/home-page';
import { NotePage } from '../pages/note-page';

export const Route = {
  home: { path: '/', Component: HomePage },
  note: { path: '/notes/:id', Component: NotePage },
};

export const routes = Object.values(Route);

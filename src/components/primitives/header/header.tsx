import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Route } from '../../../router/routes';
import { link, root, title } from './header.css';

export const Header: FC = () => (
  <header className={root}>
    <Link to={Route.home.path} className={link}>
      <p className={title}>📝 Notes</p>
    </Link>
  </header>
);

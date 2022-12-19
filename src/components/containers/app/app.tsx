import { Router } from '../../../router';
import { themeClass } from '../../../themes/main.css';
import { Header } from '../../primitives/header';
import './app.css';

export const App = () => {
  return (
    <div className={themeClass}>
      <Header />
      <Router />
    </div>
  );
};

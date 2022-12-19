import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

export const Router = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route key="*" path="*" element={<>page not found</>} />
    </Routes>
  );
};

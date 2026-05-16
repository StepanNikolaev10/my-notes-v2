import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import { useAuthStore } from '../stores/useAuthStore';

const AppRouter = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return isAuth ? (
    <Routes>
      {/* {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Navigate to="/notes" replace />} /> */}
      Приватные страницы
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;

// import { Route, Routes, Navigate } from 'react-router-dom';
// import { publicRoutes, privateRoutes } from '../router/routes';
// import { useAuth } from '../context/auth/useAuth';
// import Loader from '../ui/Loader/Loader';

// const AppRouter = () => {
//   const { isAuth, isLoading } = useAuth();

//   if (isLoading) {
//     return <Loader />;
//   }

//   return isAuth ? (
//     <Routes>
//       {privateRoutes.map((route) => (
//         <Route key={route.path} path={route.path} element={route.element} />
//       ))}
//       <Route path="*" element={<Navigate to="/notes" replace />} />
//     </Routes>
//   ) : (
//     <Routes>
//       {publicRoutes.map((route) => (
//         <Route key={route.path} path={route.path} element={route.element} />
//       ))}
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// };

// export default AppRouter;

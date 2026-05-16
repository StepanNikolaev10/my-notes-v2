import { LandingPage } from '../pages/LandingPage/index';
import { AuthPage } from '../pages/AuthPage/index';
// import { NotesPage } from '../pages/NotesPage/index';
// import { ArchivePage } from '../pages/ArchivePage/index';
// import { TrashPage } from '../pages/TrashPage/index';
// import { NotePage } from '../pages/NotePage/index';
// import { SearchPage } from '../pages/SearchPage/index';
// import { AuthPage } from '../pages/AuthPage/index';

export const privateRoutes = [
  //   { path: '/notes', element: <NotesPage /> },
  //   { path: '/archive', element: <ArchivePage /> },
  //   { path: '/trash', element: <TrashPage /> },
  //   { path: '/note/:{id}', element: <NotePage /> },
  //   { path: `/search`, element: <SearchPage /> },
];

export const publicRoutes = [
  { path: '/', element: <LandingPage /> },
  { path: '/sign-in', element: <AuthPage selectedAuthMethod="sign-in" /> },
  { path: '/sign-up', element: <AuthPage selectedAuthMethod="sign-up" /> },
];

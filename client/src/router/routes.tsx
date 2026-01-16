import LandingPage from "../pages/LandingPage";
import NotePage from "../pages/NotePage";
import NotesPage from "../pages/NotesPage";
import AuthPage from "../pages/AuthPage";
import NotesSearchPage from "../pages/NotesSearchPage";
import TrashPage from "../pages/TrashPage";

export const privateRoutes = [
    {path: '/', element: <NotesPage/>},
    {path: '/notes/:id', element: <NotePage/>},
    {path: '/search', element: <NotesSearchPage/>},
    {path: '/trash', element: <TrashPage/>}
]

export const publicRoutes = [
    {path: '/', element: <LandingPage/>},
    {path: '/sign-in', element: <AuthPage pageVariant={'SIGN_IN'}/>},
    {path: '/sign-up', element: <AuthPage pageVariant={'SIGN_UP'}/>},
]

import LandingPage from "../pages/LandingPage/LandingPage";
import NotePage from "../pages/NotePage/NotePage";
import NotesPage from "../pages/NotesPage/NotesPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import NotesSearchPage from "../pages/NotesSearchPage/NotesSearchPage";
import TrashPage from "../pages/TrashPage/TrashPage";

export const privateRoutes = [
    {path: '/', element: <NotesPage/>},
    {path: '/notes/:id', element: <NotePage/>},
    {path: '/search', element: <NotesSearchPage/>},
    {path: '/trash', element: <TrashPage/>}
]

export const publicRoutes = [
    {path: '/', element: <LandingPage pageVariant={'LANDING'}/>},
    {path: '/sign-in', element: <AuthPage pageVariant={'SIGN_IN'}/>},
    {path: '/sign-up', element: <AuthPage pageVariant={'SIGN_UP'}/>},
]

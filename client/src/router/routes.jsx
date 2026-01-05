import LandingPage from "../pages/LandingPage/LandingPage";
import NotePage from "../pages/NotePage/NotePage";
import NotesPage from "../pages/NotesPage/NotesPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import NotesSearchPage from "../pages/NotesSearchPage/NotesSearchPage";

export const privateRoutes = [
    {path: '/', element: <NotesPage/>, exact: true},
    {path: '/notes/:id', element: <NotePage/>, exact: true},
    {path: '/search', element: <NotesSearchPage/>, exact: true}
]

export const publicRoutes = [
    {path: '/', element: <LandingPage pageVariant={'LANDING'}/>, exact: true},
    {path: '/sign-in', element: <AuthPage pageVariant={'SIGN_IN'}/>, exact: true},
    {path: '/sign-up', element: <AuthPage pageVariant={'SIGN_UP'}/>, exact: true},
]

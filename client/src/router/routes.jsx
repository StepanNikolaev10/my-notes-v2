import LandingPage from "../pages/LandingPage/LandingPage";
import NotePage from "../pages/NotePage/NotePage";
import NotesPage from "../pages/NotesPage/NotesPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import { AUTH_PAGE_VARIANTS } from "../constants/authPageVariants";
import NotesSearchPage from "../pages/NotesSearchPage/NotesSearchPage";

export const privateRoutes = [
    {path: '/', element: <NotesPage/>, exact: true},
    {path: '/notes/:id', element: <NotePage/>, exact: true},
    {path: '/search', element: <NotesSearchPage/>, exact: true}
]

export const publicRoutes = [
    {path: '/', element: <LandingPage/>, exact: true},
    {path: '/sign-in', element: <AuthPage pageVariant={AUTH_PAGE_VARIANTS.SIGN_IN}/>, exact: true},
    {path: '/sign-up', element: <AuthPage pageVariant={AUTH_PAGE_VARIANTS.SIGN_UP}/>, exact: true},
]

import LandingPage from "../pages/LandingPage/LandingPage";
import NotePage from "../pages/NotePage/NotePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import NotesPage from "../pages/NotesPage/NotesPage";

export const privateRoutes = [
    {path: '/', element: <NotesPage/>, exact: true},
    {path: '/notes/:id', element: <NotePage/>, exact: true}
]

export const publicRoutes = [
    {path: '/', element: <LandingPage/>, exact: true},
    {path: '/sign-in', element: <SignInPage/>, exact: true},
    {path: '/sign-up', element: <SignUpPage/>, exact: true},
]

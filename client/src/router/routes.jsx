import LandingPage from "../pages/LandingPage/LandingPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TaskListPage from "../pages/TaskListPage/TaskListPage";

export const privateRoutes = [
    {path: '/', element: <TaskListPage/>, exact: true},
    // {path: '/posts/:id', element: <PostIdPage/>, exact: true}
]

export const publicRoutes = [
    {path: '/', element: <LandingPage/>, exact: true},
    {path: '/sign-in', element: <SignInPage/>, exact: true},
    {path: '/sign-up', element: <SignUpPage/>, exact: true},
]

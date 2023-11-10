import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Tasks from "../pages/Tasks";

export const privateRoutes = [
    {id: 1, path: '/about', Component: About},
    {id: 2, path: '/posts', Component: Posts},
    {id: 3, path: '/posts/:id', Component: PostIdPage},
    {id: 4, path: '/tasks', Component: Tasks},
];

export const publicRoutes = [
    {id: 1, path: '/login', Component: Login},
];
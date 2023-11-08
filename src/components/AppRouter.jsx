import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Tasks from "../pages/Tasks";
import Posts from "../pages/Posts";
import About from "../pages/About";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Navigate to='/tasks' />} />
        </Routes>
    );
}
 
export default AppRouter;
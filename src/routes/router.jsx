import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import Academic from "../pages/academic/Academic";
import Faculty from "../pages/faculty/Faculty";
import Notice from "../pages/notice/Notice";
import Result from "../pages/result/Result";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "/academic",
                element: <Academic></Academic>,
            },
            {
                path: "/faculty",
                element: <Faculty></Faculty>,
            },
            {
                path: "/notice",
                element: <Notice></Notice>,
            },
            {
                path: "/result",
                element: <Result></Result>,
            },
        ],
    },
]);

export default router;

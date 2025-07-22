import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import Academic from "../pages/academic/Academic";
import Faculty from "../pages/faculty/Faculty";
import Notice from "../pages/notice/Notice";
import Result from "../pages/result/Result";
import PhotoGallery from "../pages/photoGallery/PhotoGallery";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../pages/errorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
            {
                path: "/photoGallery",
                element: <PhotoGallery></PhotoGallery>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
        ],
    },
]);

export default router;

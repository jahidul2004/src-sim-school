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
import AdminLayout from "../layouts/AdminLayout";

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
    {
        path: "/admin",
        element: <AdminLayout></AdminLayout>,
        children:[
            {
                path:"/admin/students",
                element:<div className="h-[1000px] border shadow-xl p-8"><h1>I am from students</h1></div>
            }
        ]
    },
]);

export default router;

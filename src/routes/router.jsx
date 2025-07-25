import { createBrowserRouter, Link } from "react-router-dom";
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
import AdminHome from "../pages/adminPages/adminHome/AdminHome";
import AdminStudentList from "../pages/adminPages/adminAtudentList/AdminStudentList";
import Class6List from "../pages/adminPages/adminAtudentList/class6List/Class6List";
import AdminStudentDetails from "../pages/adminPages/adminAtudentList/adminStudentDetails/AdminStudentDetails";
import Class7List from "../pages/adminPages/adminAtudentList/class7List/Class7List";
import Class8List from "../pages/adminPages/adminAtudentList/class8List/Class8List";
import Class9List from "../pages/adminPages/adminAtudentList/class9List/Class9List";
import Class10List from "../pages/adminPages/adminAtudentList/class10List/Class10List";
import AdminTeacherList from "../pages/adminPages/adminTeacherList/AdminTeacherList";
import AdminTeacherDetails from "../pages/adminPages/adminTeacherList/adminTeacherDetails/AdminTeacherDetails";

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
        children: [
            {
                path: "/admin",
                element: <AdminHome></AdminHome>,
            },
            {
                path: "/admin/studentList",
                element: <AdminStudentList></AdminStudentList>,
            },
            {
                path: "/admin/studentList/addStudent",
                element: (
                    <div className="h-[100vh] flex items-center justify-center border">
                        <h1 className="text-3xl font-bold text-[#249742]">
                            শিক্ষার্থী যুক্তকরন পোর্টাল
                        </h1>
                    </div>
                ),
            },
            {
                path: "/admin/studentList/6",
                element: <Class6List></Class6List>,
            },
            {
                path: "/admin/studentList/7",
                element: <Class7List></Class7List>,
            },
            {
                path: "/admin/studentList/8",
                element: <Class8List></Class8List>,
            },
            {
                path: "/admin/studentList/9",
                element: <Class9List></Class9List>,
            },
            {
                path: "/admin/studentList/10",
                element: <Class10List></Class10List>,
            },
            {
                path: "/admin/studentList/:id",
                element: <AdminStudentDetails></AdminStudentDetails>,
            },
            {
                path:"/admin/teacherList",
                element:<AdminTeacherList></AdminTeacherList>
            },
            {
                path:"/admin/teacherList/:id",
                element:<AdminTeacherDetails></AdminTeacherDetails>
            }
        ],
    },
]);

export default router;

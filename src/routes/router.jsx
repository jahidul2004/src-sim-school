import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/h",
        element: <h1 className="btn">I am working</h1>,
    },
]);

export default router;

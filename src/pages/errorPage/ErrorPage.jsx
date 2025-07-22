import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <section className="flex items-center h-[100vh] sm:p-16 dark:bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
               <MdErrorOutline className="text-error" size={96} />
                <p className="text-3xl">
                    Looks like our services are currently offline
                </p>
                <Link
                    rel="noopener noreferrer"
                    to={"/"}
                    className="btn bg-[#249742] border-none rounded-lg text-white"
                >
                    Back to homepage
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;

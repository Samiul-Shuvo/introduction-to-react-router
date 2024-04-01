import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
               error.status === 404 && <div>
                <h2>Page Not Found</h2>
                <p>Talk to Samiul for any help</p>
                <Link to='/'>
                    <button>Home Calling</button>
                </Link>
               </div>

            }
        </div>
    );
};

export default ErrorPage;
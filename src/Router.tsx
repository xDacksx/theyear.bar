import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./pages/home.page";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: (
            // <AuthProvider>
            <App />
            // </AuthProvider>
        ),
        children: [
            {
                path: "*",
                element: <h1>Error 404</h1>,
            },
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
]);

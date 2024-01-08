import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";

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
        ],
    },
]);

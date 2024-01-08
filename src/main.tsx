import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import React from "react";

import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={Router} />
    </React.StrictMode>
);

import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export function App() {
    return (
        <Fragment>
            <main>
                <Outlet />
            </main>
            <a className="info" href="https://diegozar.com" target="_blank">
                diegozar.com
            </a>
        </Fragment>
    );
}

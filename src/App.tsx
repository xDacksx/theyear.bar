import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { firestore } from "./firebase/config";

export function App() {
    const [visits, setVisits] = useState(0);

    async function getVisits(): Promise<number> {
        try {
            const docRef = doc(firestore, "analytics", "visits");
            const response = await getDoc(docRef);
            const data = response.data();
            if (!data) throw new Error();
            setVisits(data.count);
            return data.count;
        } catch (error) {
            console.log(error);
            return -1;
        }
    }

    async function newVisit() {
        const count = await getVisits();
        const docRef = doc(firestore, "analytics", "visits");
        await updateDoc(docRef, {
            count: count + 1,
        });
        setVisits(count + 1);
    }

    useEffect(() => {
        getVisits();
        newVisit();
    }, []);

    return (
        <Fragment>
            <main>
                <Outlet />
            </main>
            <a className="info" href="https://diegozar.com" target="_blank">
                diegozar.com
            </a>

            <span className="info visits">Visits: {visits}</span>
        </Fragment>
    );
}

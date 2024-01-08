import { FC, Fragment, ReactElement, useEffect, useState } from "react";
import { ComponentAttributes } from "../interfaces/components";
import { ProgressBar } from "../components/progress-bar";

export const HomePage: FC<ComponentAttributes> = (): ReactElement => {
    const [width, setWidth] = useState(window.innerWidth * 0.8);
    const [percentage, setPercentage] = useState(0);

    const handleResize = () => setWidth(window.innerWidth * 0.8);
    useEffect(() => {
        window.addEventListener("resize", handleResize, false);

        const interval = setInterval(() => {
            const _now = new Date();
            const now = {
                year: _now.getFullYear(),
                value: _now,
            };
            const year = {
                start: new Date(`Jan 1 ${now.year}`),
                end: new Date(`Dec 31 ${now.year}`),
            };

            const total = year.end.getTime() - year.start.getTime();
            const current = now.value.getTime() - year.start.getTime();
            const percentage = (current / total) * 100;

            setPercentage(percentage);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Fragment>
            <h2>{new Date().getFullYear()}</h2>
            <ProgressBar width={width} percentage={percentage} />
        </Fragment>
    );
};

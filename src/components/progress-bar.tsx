import styles from "../styles/components/progress-bar.module.scss";
import { FC, ReactElement } from "react";

export const ProgressBar: FC<ProgressBar> = (props): ReactElement => {
    const { percentage, width } = props;

    return (
        <div className={styles.bar} style={{ width }}>
            <div
                className={styles.progress}
                style={{ width: width * (percentage / 100) }}
            ></div>
        </div>
    );
};

interface ProgressBar {
    width: number;
    percentage: number;
}

import withCount from "../../withCount";
import styles from "./PrvaKompa.module.css";

const PrvaKompa = ({ count, increment }) => {
    const countStyles = {
        backgroundColor: "blue",
        opacity: 0.5,
    };

    const btnStyles = {
        color: "blue",
    };

    return (
        <>
            <div style={countStyles}>{count}</div>
            <button
                style={btnStyles}
                className={styles.btn}
                onClick={increment}
            >
                Increment
            </button>
        </>
    );
};

export default withCount(PrvaKompa);

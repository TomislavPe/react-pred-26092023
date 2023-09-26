import withCount from "../../withCount";
import styles from "./PrvaKompa.module.css"

const PrvaKompa = ({ count, increment }) => {
    return (
        <>
            <div>{count}</div>
            <button className={styles.btn} onClick={increment}>Increment</button>
        </>
    );
};

export default withCount(PrvaKompa);

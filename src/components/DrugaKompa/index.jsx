import withCount from "../../withCount";
import styles from "./DrugaKompa.module.css";

const DrugaKompa = ({ count, increment }) => {
    const countStyles = {
        backgroundColor: "blue",
        opacity: .5
    }

    return (
        <>
            <div>{count}</div>
            <button style={countStyles}
                className={count < 5 ? styles.btn : styles.red}
                onClick={increment}
            >
                Increment
            </button>
        </>
    );
};

export default withCount(DrugaKompa);

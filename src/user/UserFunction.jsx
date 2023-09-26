import styles from "./User.module.css";

function UserFunction({ name, years, changeName }) {
    const inputStyle = {
        backgroundColor: "grey",
    };

    return (
        <>
            <div className={styles.boxedSection}>
                <p>
                    Pozdrav, moje ime je {name} i imam {years} godina
                </p>
                <input style={inputStyle} type="text" onChange={changeName} />
            </div>
        </>
    );
}

export default UserFunction;

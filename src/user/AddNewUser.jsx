import React, { useState } from "react";
import styles from "./User.module.css";

const AddNewUser = ({ addUser }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(30);

    const btnStyle = {
        backgroundColor: "lightgrey",
        color: "blue",
    };
    return (
        <form
            className={styles.addSection}
            onSubmit={(event) => {
                addUser(event, name, age);
                setName("");
                setAge(30);
            }}
        >
            <div>
                <label htmlFor="nameInput">
                    Unesi ime:
                    <input
                        type="text"
                        id="nameInput"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="ageInput">
                    Unesi godine:
                    <input
                        type="text"
                        id="ageInput"
                        value={age}
                        onChange={(event) => {
                            setAge(event.target.value);
                        }}
                    />
                </label>
            </div>
            <button style={btnStyle} type="submit">
                Potvrdi
            </button>
        </form>
    );
};

export default AddNewUser;

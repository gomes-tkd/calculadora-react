import React from 'react';
import styles from "../css/main.module.css";

const ButtonNumber = ({ numButton , setNum, value, num}) => {
    function handleClick() {
        setNum(num + value);
    }

    function clearResult() {
        setNum("");
    }

    return (
        <div>
            {
                (value === "AC") ? (
                    <button
                        onClick={clearResult}
                        className={styles.btnAC}
                    >
                        {numButton}
                    </button>
                ) : (
                    <button
                        className={`${styles.btnNumber}`}
                        onClick={handleClick}
                    >
                        {numButton}
                    </button>
                )
            }
        </div>
    );
};

export default ButtonNumber;
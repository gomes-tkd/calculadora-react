import React from 'react';
import styles from "../css/main.module.css";

const ButtonNumber = ({ numButton , setNum, value, num, btnOpp}) => {
    function handleClick() {
        setNum(num + value);
    }

    return (
        <>
            {
                (value === "0") ? (
                    <button
                        className={`${styles.btnZero} ${btnOpp}`}
                        onClick={handleClick}
                    >
                        {numButton}
                    </button>
                ) : (
                    <button
                        className={`${styles.btnNumber} ${btnOpp}`}
                        onClick={handleClick}
                    >
                        {numButton}
                    </button>
                )
            }
        </>
    );
};

export default ButtonNumber;
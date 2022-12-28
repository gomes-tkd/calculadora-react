import { useState } from "react";
import ButtonNumber from "./assets/components/ButtonNumber";
import styles from "./assets/css/main.module.css";

function App() {
  const [num, setNum] = useState("");

  function handleExpress() {
      setNum(num);
  }

  function resultado() {
      setNum(eval(num));
  }

  return (
    <div className={styles.container}>
        <div className={`${styles.divResult}`}>
            <p className={styles.pResult} onChange={handleExpress} > {num} </p>
        </div>
        <div className={styles.numbers}>
            <ButtonNumber
                numButton={"AC"}
                setNum={setNum}
                num={num}
                value={"AC"}
                className={styles.btnAC}
            />
            <ButtonNumber
                numButton={"/"}
                setNum={setNum}
                num={num}
                value={"/"}
                className={styles.btnOpp}
            />
        </div>
        <div className={styles.numbers}>
            {
                ["7", "8", "9"].map(
                    (numButton) => (
                        <ButtonNumber
                            key={numButton}
                            numButton={numButton}
                            setNum={setNum}
                            num={num}
                            value={numButton}
                        />
                    )
                )
            }
            <ButtonNumber
                numButton={"*"}
                setNum={setNum}
                num={num}
                value={"*"}
            />
        </div>
        <div className={styles.numbers}>
            {
                ["4", "5", "6"].map(
                    (numButton) => (
                        <ButtonNumber
                            key={numButton}
                            numButton={numButton}
                            setNum={setNum}
                            num={num}
                            value={numButton}
                        />
                    )
                )
            }
            <ButtonNumber
                numButton={"-"}
                setNum={setNum}
                num={num}
                value={"-"}
            />
        </div>
        <div className={styles.numbers}>
            {
                ["1", "2", "3"].map(
                    (numButton) => (
                        <ButtonNumber
                            key={numButton}
                            numButton={numButton}
                            setNum={setNum}
                            num={num}
                            value={numButton}
                        />
                    )
                )
            }
            <ButtonNumber
                numButton={"+"}
                setNum={setNum}
                num={num}
                value={"+"}
            />
        </div>
        <div className={styles.numbers}>
            <ButtonNumber
                numButton={"0"}
                setNum={setNum}
                num={num}
                value={"0"}
            />
            <ButtonNumber
                numButton={"."}
                setNum={setNum}
                num={num}
                value={"."}
            />

            <button
                onClick={resultado}
                className={`${styles.btnNumber} ${styles.btnOpp}`}
            >
                =
            </button>
        </div>
    </div>
  );
}

export default App;

/*
*
      <input
          className={`${styles.divResult}`}
          type="text"
          value={num}
          onChange={handleExpress}
      />
* */
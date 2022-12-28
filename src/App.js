import { useState } from "react";
import ButtonNumber from "./assets/components/ButtonNumber";
import styles from "./assets/css/main.module.css";

function App() {
  const [num, setNum] = useState("");

  function handleExpress() {
      setNum(num);
  }

  function clearResult() {
      setNum("");
  }

    function resultado() {
      setNum(eval(num).toFixed(3));
  }

  return (
      <>
          <h1>Calculadora</h1>
          <div className={styles.container}>
              <div className={`${styles.divResult}`}>
                  <p className={styles.pResult} onChange={handleExpress} > {num} </p>
              </div>
              <div className={styles.numbers}>
                  <button
                      onClick={clearResult}
                      className={styles.btnAC}
                  >
                      AC
                  </button>
                  <ButtonNumber
                      numButton={"/"}
                      setNum={setNum}
                      num={num}
                      value={"/"}
                      btnOpp={styles.btnOpp}
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
                      btnOpp={styles.btnOpp}
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
                      btnOpp={styles.btnOpp}
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
                      btnOpp={styles.btnOpp}
                  />
              </div>
              <div className={styles.numbers}>
                  <ButtonNumber
                      numButton={"0"}
                      setNum={setNum}
                      num={num}
                      value={"0"}
                      btnOpp={styles.btnDot}
                  />
                  <ButtonNumber
                      numButton={"."}
                      setNum={setNum}
                      num={num}
                      value={"."}
                      btnOpp={styles.btnDot}
                  />

                  <button
                      onClick={resultado}
                      className={`${styles.btnNumber} ${styles.btnOpp}`}
                  >
                      =
                  </button>
              </div>
          </div>
          <h4>José Gomes - 28/12/2022</h4>
      </>
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
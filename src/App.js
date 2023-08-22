import React, { useReducer } from "react";
import "./Calculator.css";

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "APPEND":
      return {
        ...state,
        input: state.input + action.value,
      };
    case "CLEAR":
      return {
        ...state,
        input: "",
      };
    case "CALCULATE":
      try {
        return {
          ...state,
          input: eval(state.input).toString(),
        };
      } catch (error) {
        return {
          ...state,
          input: "Error",
        };
      }
    default:
      return state;
  }
};

const App = () => {
  const initialState = {
    input: "",
  };

  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleButtonPress = (value) => {
    if (value === "C") {
      dispatch({ type: "CLEAR" });
    } else if (value === "=") {
      dispatch({ type: "CALCULATE" });
    } else {
      dispatch({ type: "APPEND", value });
    }
  };

  return (
    <>
      <h1 style={{textAlign:"center", color:`#36454F`}}>Simple Calculator Application( useReducer )</h1>
      <div className="calculator">
        <input type="text" className="input" value={state.input} readOnly />
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleButtonPress("7")}>7</button>
            <button onClick={() => handleButtonPress("8")}>8</button>
            <button onClick={() => handleButtonPress("9")}>9</button>
            <button onClick={() => handleButtonPress("+")}>+</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonPress("4")}>4</button>
            <button onClick={() => handleButtonPress("5")}>5</button>
            <button onClick={() => handleButtonPress("6")}>6</button>
            <button onClick={() => handleButtonPress("-")}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonPress("1")}>1</button>
            <button onClick={() => handleButtonPress("2")}>2</button>
            <button onClick={() => handleButtonPress("3")}>3</button>
            <button onClick={() => handleButtonPress("*")}>*</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonPress("C")}>C</button>
            <button onClick={() => handleButtonPress("0")}>0</button>
            <button onClick={() => handleButtonPress("=")}>=</button>
            <button onClick={() => handleButtonPress("/")}>/</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

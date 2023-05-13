import React, { useState } from "react";

const Calculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateInput = () => {
    if (number1 === "" || number2 === "") {
      setError("Error: Num cannot be empty");
      return false;
    }

    if (!/^-?\d*\.?\d+$/.test(number1) || !/^-?\d*\.?\d+$/.test(number2)) {
      setError("Error: Please enter valid numbers.");
      return false;
    }

    setError("");  
    return true;
  };

  const handleAddition = () => {
    if (!validateInput()) return;

    const sum = +number1 + +number2;
    setResult(sum);
    setSuccess(`Success:Your result is shown above! `);
  };

  const handleSubtraction = () => {
    if (!validateInput()) return;

    const difference = +number1 - +number2;
    // setResult(difference);
    // console.log(difference);
    if(number1===number2)
    {
      setResult("0");
      console.log(difference);
    }
    else{
      setResult(difference);
    }
    setSuccess(`Success:Your result is shown above! `);
  };

  const handleMultiplication = () => {
    if (!validateInput()) return;

    const product = +number1 * +number2;
    setResult(product);
    setSuccess(`Success:Your result is shown above! `);
  };

  const handleDivision = () => {
    if (!validateInput()) return;

    if (+number2 === 0) {
      setError("Cannot divide by zero.");
      return;
    }

    const quotient = +number1 / +number2;
    setResult(quotient);
    setSuccess(`Success:Your result is shown above! `);
  };

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  return (
    <div className="box">
      <h1 className="heading1">React Calculator</h1>
      <input
        type="text"
        placeholder="Num 1"
        value={number1}
        onChange={handleNumber1Change}
        className="inp"
      />
      <br></br>
      <input
        type="text"
        placeholder="Num 2"
        value={number2}
        onChange={handleNumber2Change}
        className="inp"
      />
      <div>
        <button className="btn" onClick={handleAddition}>+</button>
        <button className="btn" onClick={handleSubtraction}>-</button>
        <button className="btn" onClick={handleMultiplication}>*</button>
        <button className="btn" onClick={handleDivision}>/</button>
      </div>
      <div>
        {result && <h3  className="heading1">Result= {result}</h3>} 
        {error && <h4 className="paraHeading" style={{ color: "red" }}>{error}</h4>}
        {success && <h4 className="paraHeading" style={{ color: "green" }}>{success}</h4>}
        
      </div>
    </div>
  ); 
};

export default Calculator;

import  { useRef, useState } from 'react';

const UseRefExample = () => {
  const inputRef = useRef(null); 
  const [inputValue, setInputValue] = useState(""); 
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleDisplayValue = () => {
    if (inputRef.current) {
      setInputValue(inputRef.current.value);
    }
  };

  return (
    <div>
      <label>Enter your Name: </label>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
      <button onClick={handleDisplayValue}>Display Input Value</button>
      {inputValue && (
        <div>
          <h1>Entered Value: {inputValue}</h1>
        </div>
      )}
    </div>
  );
};

export default UseRefExample;

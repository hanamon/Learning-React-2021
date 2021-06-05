import React, { useState } from 'react';

function Count() {
  const [number, setNumber] = useState(0);
  
  const increaseFn = () => {
    //setNumber(number+1);
    setNumber(setNumber => setNumber+1);
  }
  
  const decreaseFn = () => {
    setNumber(setNumber => setNumber-1);
  }

  return (
    <div className="container">
      <h2>useState Hook으로 컴포넌트에서 바뀌는 값 관리하기</h2>
      <div>
        <h3>{number}</h3>  
        <button onClick={increaseFn}>+1</button>
        <button onClick={decreaseFn}>-1</button>
      </div> 
    </div> 
  );
}

export default Count;
import React, { useState } from 'react';

function SingleInput() {
  const [value, setValue] = useState('');
  
  const setValueFn = (e) => {
    //console.log(e.target.value);
    setValue(e.target.value);
  }

  const resetFn = () => {
    setValue('');
  }

  return (
    <div className="container">
      <h2>단일 input 상태 관리하기</h2>
      <div>
        <input type="text" value={value} onChange={setValueFn} />
        <button onClick={resetFn}>초기화</button>
      </div>
      <span>값 : </span>
      <span>{value}</span>
    </div>
  );
}

export default SingleInput;
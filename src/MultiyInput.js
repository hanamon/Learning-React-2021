import React, { useState } from 'react';

function MultiyInput() {
  const [inputs, setInput] = useState({
    fullName: '',
    nickName: ''
  });

  const { fullName, nickName } = inputs;

  const setInputFn = (e) => {
    setInput({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  const resetFn = () => {
    setInput({
      fullName: '',
      nickName: ''
    });
  }

  return (
    <div className="container">
      <h2>여러개의 input 상태 관리하기</h2>
      <div>
        <label>이름 : </label>
        <input type="text" name="fullName" value={fullName} onChange={setInputFn} />
        <label>닉네임 : </label>
        <input type="text" name="nickName" value={nickName} onChange={setInputFn} />
        <button onClick={resetFn}>초기화</button>
      </div>
      <span>성함 : {fullName} ({nickName})</span>
    </div>
  );
}

export default MultiyInput;
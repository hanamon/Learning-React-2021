import React, { useState, useRef } from 'react';

function UseRef() {

  const [ inputs, setInputs ] = useState({
    username: '',
    useremail: '',
  });
  const { username, useremail } = inputs;

  // useRef() 함수형 컴포넌트 후크 사용
  const nameInputRef = useRef();

  const onChanegeFn = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const onResetFn = () => {
    setInputs({
      username: '',
      useremail: '',
    });

    nameInputRef.current.focus();
  }

  return (
    <div className="container">
      <h2>useRef로 리랜더링 필요없는 변수 관리하기 (DOM API focus() 사용)</h2>
      <div>
        <input
          name="username"
          placeholder="이름" 
          value={username} 
          onChange={onChanegeFn} 
          ref={nameInputRef} />
        <input 
          name="useremail"
          placeholder="이메일" 
          value={useremail} 
          onChange={onChanegeFn} />
        <button onClick={onResetFn}>초기화</button>
      </div>
      <div>
        이름: {username} | 이메일: {useremail}
      </div>  
    </div>
  );
}

export default UseRef;
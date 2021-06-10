import React from 'react';

function Wrapper({ children }) {
  //console.log(children);

  return (
    <div className="wrapper">
      <h2>컴포넌트로 컴포넌트 감싸기 children</h2>
      <p>
        감싸는 컴포넌트에서 children 이라는 props를 사용해야
        안에 컴포넌트가 렌더링된다.
        children 이라는 이름을 꼭 사용해야함.
      </p>
      {children}
    </div>
  );
}

export default Wrapper;
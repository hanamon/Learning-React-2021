import React from 'react';

function Props(props) {  
  //console.log(props);

  const { name, nickName, fontSize, color, padding, background } = props;

  //console.log( name, fontSize, color, padding, background );

  return (
    <div className="container">
      <h2>Props를 통해 컴포넌트 값 전달하기</h2>
      <div>
        <div style={{fontSize, color, padding, background}}>
          Hello {name}!<br />
          {nickName}
        </div>
      </div>
    </div>
  );
}

Props.defaultProps = {
  name: '이름이 없습니다.',
  nickName: '닉네임이 없습니다.'
};

export default Props;
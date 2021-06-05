import React from 'react';

function ConditiRender({ name, color, isSpecial }) {
  //console.log( name, color, isSpecial);

  const style = {
    fontSize: 24,
    color: color,
    padding: '1rem',
    background: 'lightyellow'
  };

  return (
    <div className="container">
      <h2 >조건부 렌더링</h2>
      <div style={style}>
        {/*isSpecial ? <b>*</b> : null*/}
        {isSpecial && <b>*</b>}
        Hello {name}!
      </div>
    </div>
  );
}

export default ConditiRender;
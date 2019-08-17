import React, { useState } from 'react';

import './tokeninput.css';

const TokenInput = ({ onSubmit, name }) => {
  const [input, setInput] = useState('');

  return (
    <form onSubmit={onSubmit}>
      <input name={name} value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Your ${name} Token`} />
      <button className={'active' ? 'active' : ''} type="submit">Save</button>
    </form>
  )
}

export default TokenInput;

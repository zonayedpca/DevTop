import React, { useState } from 'react';
import { connect } from 'react-redux';

import './tokeninput.css';

const TokenInput = ({ options, onSubmit, name }) => {
  const [input, setInput] = useState('');

  const provider = options[String(name).toLowerCase()];
  const status = provider.token;
  const isError = provider.error;
  console.log(provider);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  }

  return (
    <form className="token-input" onSubmit={handleSubmit}>
      <input name={name} value={status ? '*****' : input} onChange={(e) => setInput(e.target.value)} placeholder={`Your ${name} Token`} />
      <button className={input ? '' : 'disabled'} type="submit">Save</button>
      {isError && <p>Please check you token again!</p>}
    </form>
  )
}

export default connect(({ options }) => ({ options }))(TokenInput);

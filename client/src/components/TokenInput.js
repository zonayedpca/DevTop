import React, { useState } from 'react';
import { connect } from 'react-redux';

import './tokeninput.css';

const TokenInput = ({ options, onSubmit, name, instruction }) => {
    const [input, setInput] = useState('');

    const provider = options[String(name).toLowerCase()];
    const status = provider.token;
    const isLoading = provider.loading;
    const isError = provider.error;
    const handleSubmit = e => {
        e.preventDefault();
        if (!status) {
            onSubmit(input);
        }
    };

    return (
        <form className="token-input" onSubmit={handleSubmit}>
            <input
                name={name}
                value={status ? '*****' : input}
                onChange={e => setInput(e.target.value)}
                placeholder={`Your ${name} Token`}
            />
            <button
                className={input && !status ? '' : 'disabled'}
                type="submit"
            >
                {isLoading ? '...' : 'Save'}
            </button>
            {isError && (
                <p className="info error">Please check you token again!</p>
            )}
            {!status && <p className="info">{instruction}</p>}
        </form>
    );
};

export default connect(({ options }) => ({ options }))(TokenInput);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleInput, createNewLink } from '../../../actions';

class New extends Component {
    handleForm = e => {
        e.preventDefault();
        const { options, shortlinks, createNewLink } = this.props;
        const { text } = shortlinks.input;
        const { token } = options.bitly;
        createNewLink(text, token);
    };

    render() {
        const { shortlinks, handleInput } = this.props;
        const { text, error } = shortlinks.input;
        return (
            <form onSubmit={this.handleForm} className="shortlink-new">
                <input
                    onChange={e => handleInput(e.target.value)}
                    value={text}
                    placeholder="Your Link"
                />
                <button type="submit">Create</button>
                {error && <p className="alert error">{error} </p>}
            </form>
        );
    }
}

export default connect(
    ({ options, shortlinks }) => ({ options, shortlinks }),
    { createNewLink, handleInput }
)(New);

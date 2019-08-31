import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBookmark } from '../../../actions';

class Add extends Component {
    state = {
        name: '',
        link: '',
        active: false,
    };

    componentDidUpdate(prevProps, prevState) {
        const { name, link } = this.state;
        const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/g;
        const validLink = regex.test(link);
        if (name !== prevState.name || link !== prevState.link) {
            if (name && link && validLink) {
                this.setState({ active: true });
            } else {
                this.setState({ active: false });
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        let { name, link, active } = this.state;
        const { addBookmark } = this.props;
        const id = Date.now();
        if (active) {
            link = link.toLowerCase();
            if (!link.startsWith('http')) {
                link = `http://${link}`;
            }
            addBookmark({ id, name, link });
            this.setState({ name: '', link: '', active: false });
        }
    };

    handleInput = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    render() {
        const { name, link, active } = this.state;
        return (
            <div className="bookmark-add">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        name="name"
                        value={name}
                        onChange={this.handleInput.bind(this)}
                        placeholder="Name it"
                    />
                    <input
                        name="link"
                        value={link}
                        onChange={this.handleInput.bind(this)}
                        placeholder="Add a new bookmark"
                    />
                    <button className={active ? 'active' : ''} type="submit">
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    { addBookmark }
)(Add);

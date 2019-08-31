import React from 'react';

import './head.css';

class Head extends React.PureComponent {
    render() {
        const { title, children } = this.props;
        return (
            <div className="head">
                <h3 className="title">{title}</h3>
                <ul className="tools">{children}</ul>
            </div>
        );
    }
}

export { Head };

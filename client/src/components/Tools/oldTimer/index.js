import React, { Component } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { Head } from '../../common';

class Timer extends Component {
    renderContent = () => {
        return <p>Timer</p>;
    };

    render() {
        return (
            <div className="timer-area">
                <Head title="Timer">
                    <li className="remove">
                        <FiTrash2 />
                    </li>
                </Head>
                {this.renderContent()}
            </div>
        );
    }
}

export default Timer;

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FiPauseCircle, FiPlayCircle, FiTrash2 } from 'react-icons/fi';

import Content from './Content';
import { Head, ShowBox, Info } from '../../common';

import {
    clipboardSend,
    clipboardRemove,
    clipboardRemoveAll,
} from '../../../actions';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

class ClipBoard extends PureComponent {
    state = {
        enabled: true,
        info: false,
    };

    componentDidMount() {
        const { clipboardSend } = this.props;
        this.onPlay();
        ipcRenderer.on('clipboard:send', (event, data) => {
            const id = Date.now();
            clipboardSend({ id, data });
        });
        ipcRenderer.on('clipboard:pause', () => {
            this.setState({ enabled: false });
        });
        ipcRenderer.on('clipboard:play', () => {
            this.setState({ enabled: true });
        });
    }

    componentWillUnmount() {
        window.clearTimeout();
        ipcRenderer.removeAllListeners('clipboard:play');
        ipcRenderer.removeAllListeners('clipboard:pause');
        ipcRenderer.removeAllListeners('clipboard:send');
    }

    controlInfoWindow = () => {
        this.setState({ info: true });
        setTimeout(() => {
            this.setState({ info: false });
        }, 2000);
    };

    onCopy = id => {
        const { clipboards } = this.props;
        const data = clipboards[id].data;
        ipcRenderer.send('clipboard:copy', data);
        this.controlInfoWindow();
    };

    onRemove = id => {
        const { clipboardRemove } = this.props;
        clipboardRemove(id);
    };

    onAllRemove = () => {
        const { clipboardRemoveAll } = this.props;
        clipboardRemoveAll();
    };

    onPause = () => {
        ipcRenderer.send('clipboard:pause');
    };

    onPlay = () => {
        ipcRenderer.send('clipboard:play');
    };

    renderContent() {
        const { clipboards } = this.props;
        const keys = Object.keys(clipboards).reverse();
        if (!keys.length) {
            return (
                <ShowBox>
                    <p>Nothing Found!</p>
                </ShowBox>
            );
        }
        return keys.map(clipboard => (
            <Content
                key={clipboard}
                id={clipboard}
                data={clipboards[clipboard].data}
                onCopy={this.onCopy.bind(this)}
                onRemove={this.onRemove.bind(this)}
            />
        ));
    }

    render() {
        const { enabled, info } = this.state;

        return (
            <div className="clipboard-area">
                <Info visible={info} text="Text Copied" />
                <Head title="ClipBoard">
                    {enabled ? (
                        <li onClick={this.onPause.bind(this)} className="pause">
                            <FiPauseCircle />
                        </li>
                    ) : (
                        <li onClick={this.onPlay.bind(this)} className="play">
                            <FiPlayCircle />
                        </li>
                    )}
                    <li
                        onClick={this.onAllRemove.bind(this)}
                        className="remove"
                    >
                        <FiTrash2 />
                    </li>
                </Head>
                <ul>{this.renderContent()}</ul>
            </div>
        );
    }
}

export default connect(
    ({ clipboards }) => ({ clipboards }),
    { clipboardSend, clipboardRemove, clipboardRemoveAll }
)(ClipBoard);

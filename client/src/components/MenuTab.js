import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {
    FiClipboard,
    FiCode,
    FiLink,
    FiList,
    FiGrid,
    FiSettings,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import ClipBoard from './Tools/ClipBoard';
import Code from './Tools/Code';
import ShortLink from './Tools/ShortLink';
import Todo from './Tools/Todo';
import Bookmark from './Tools/Bookmark';

import clipboard from '../assets/icon/clipboard.svg';
import clipboardActive from '../assets/icon/clipboard-active.svg';
import code from '../assets/icon/code.svg';
import codeActive from '../assets/icon/code-active.svg';
import hashtags from '../assets/icon/hashtags.svg';
import hashtagsActive from '../assets/icon/hashtags-active.svg';
import heart from '../assets/icon/heart.svg';
import heartActive from '../assets/icon/heart-active.svg';
import image from '../assets/icon/image.svg';
import imageActive from '../assets/icon/image-active.svg';
import links from '../assets/icon/links.svg';
import linksActive from '../assets/icon/links-active.svg';
import settings from '../assets/icon/settings.svg';
import settingsActive from '../assets/icon/settings-active.svg';

import './tab.css';

const TabContainer = props => (
    <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
    </Typography>
);

class MenuTab extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    render() {
        const { value } = this.state;
        const clipBoardIcon = (
            <img
                alt="clipboard"
                src={value === 0 ? clipboardActive : clipboard}
            />
        );
        const codeIcon = (
            <img alt="code" src={value === 1 ? codeActive : code} />
        );
        const linkIcon = (
            <img alt="links" src={value === 2 ? linksActive : links} />
        );
        const listIcon = (
            <img alt="settings" src={value === 3 ? settingsActive : settings} />
        );
        const toolIcon = (
            <img alt="hashtags" src={value === 4 ? hashtagsActive : hashtags} />
        );

        return (
            <div className="tab">
                <AppBar position="static" color="default">
                    <Tabs
                        style={{ background: '#201659' }}
                        value={value}
                        onChange={this.handleChange}
                    >
                        <Tab icon={clipBoardIcon} aria-label="ClipBoard" />
                        <Tab icon={codeIcon} aria-label="Code" />
                        <Tab icon={linkIcon} aria-label="ShortLink" />
                        <Tab icon={listIcon} aria-label="Todo" />
                        <Tab icon={toolIcon} aria-label="Tools" />
                    </Tabs>
                </AppBar>
                <div className="tab-content">
                    <div className={value === 0 ? 'show' : 'hidden'}>
                        <TabContainer>
                            <ClipBoard />
                        </TabContainer>
                    </div>
                    <div className={value === 1 ? 'show' : 'hidden'}>
                        <TabContainer>
                            <Code />
                        </TabContainer>
                    </div>
                    <div className={value === 2 ? 'show' : 'hidden'}>
                        <TabContainer>
                            <ShortLink />
                        </TabContainer>
                    </div>
                    <div className={value === 3 ? 'show' : 'hidden'}>
                        <TabContainer>
                            <Todo />
                        </TabContainer>
                    </div>
                    <div className={value === 4 ? 'show' : 'hidden'}>
                        <TabContainer>
                            <Bookmark />
                        </TabContainer>
                    </div>
                </div>
                <div className="app-settings">
                    <Link to="/settings">
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <img alt="settings" src={settings} />
                        </IconButton>
                    </Link>
                </div>
            </div>
        );
    }
}

const styles = {
    tabHeadStyle: {
        backgroundColor: '#fff',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.4)',
    },
    tabContentStyle: {},
    iconStyle: {
        height: 20,
        width: 20,
    },
};

export default MenuTab;

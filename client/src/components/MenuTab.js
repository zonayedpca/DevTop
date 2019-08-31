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
        const { iconStyle } = styles;
        const clipBoardIcon = <FiClipboard style={iconStyle} />;
        const codeIcon = <FiCode style={iconStyle} />;
        const listIcon = <FiList style={iconStyle} />;
        const linkIcon = <FiLink style={iconStyle} />;
        const toolIcon = <FiGrid style={iconStyle} />;

        return (
            <div className="tab">
                <AppBar position="static" color="default">
                    <Tabs
                        style={{ background: '#fff' }}
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
                            <FiSettings />
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

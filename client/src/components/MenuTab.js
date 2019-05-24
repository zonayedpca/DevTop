import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { FiClipboard, FiCode, FiClock, FiLink, FiList, FiGrid } from "react-icons/fi";

import ClipBoard from './Tools/ClipBoard/ClipBoard';
import Code from './Tools/Code/Code';

import './tab.css'

const TabContainer = props => (
  <Typography component="div" style={{ padding: 8 * 3 }}>
    {props.children}
  </Typography>
)

class MenuTab extends Component {
  state = {
    value: 0
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  }

  render() {
    const { value } = this.state;
    const { iconStyle } = styles;
    const clipBoardIcon = <FiClipboard style={iconStyle} />;
    const codeIcon = <FiCode style={iconStyle} />;
    const clockIcon = <FiClock style={iconStyle} />;
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
            <Tab icon={clockIcon} aria-label="Clock" />
            <Tab icon={toolIcon} aria-label="Tools" />
          </Tabs>
        </AppBar>
        <div className="tab-content">
          {value === 0 && <TabContainer><ClipBoard /></TabContainer>}
          {value === 1 && <TabContainer><Code /></TabContainer>}
          {value === 2 && <TabContainer>Item Three</TabContainer>}
          {value === 3 && <TabContainer>Item Four</TabContainer>}
          {value === 4 && <TabContainer>Item Five</TabContainer>}
          {value === 5 && <TabContainer>Item Six</TabContainer>}
          {value === 6 && <TabContainer>Item Seven</TabContainer>}
        </div>
      </div>
    )
  }
}

const styles = {
  tabHeadStyle: {
    backgroundColor: '#fff',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.4)'
  },
  tabContentStyle: {

  },
  iconStyle: {
    height: 20,
    width: 20
  }
}

export default MenuTab;

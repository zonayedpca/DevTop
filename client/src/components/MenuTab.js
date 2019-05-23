import React, { Component } from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import { FiClipboard, FiCode, FiClock, FiLink, FiList, FiGrid } from "react-icons/fi";

import ClipBoard from './Tools/ClipBoard/ClipBoard';
import Code from './Tools/Code/Code';

import 'rc-tabs/assets/index.css';
import './tab.css'

class MenuTab extends Component {
  state = {
    activeKey: '1'
  };

  onChange = activeKey => {
    this.setState({
      activeKey,
    });
  }

  handleNotExistKey = () => {
    this.setState({
      activeKey: '-1',
    });
  }

  render() {
    const { tabHeadStyle, tabContentStyle, iconStyle } = styles;

    const clipBoardIcon = <FiClipboard style={iconStyle} />;
    const codeIcon = <FiCode style={iconStyle} />;
    const clockIcon = <FiClock style={iconStyle} />;
    const listIcon = <FiList style={iconStyle} />;
    const linkIcon = <FiLink style={iconStyle} />;
    const toolIcon = <FiGrid style={iconStyle} />;

    return (
      <div>
          <Tabs
            renderTabBar={() => <ScrollableInkTabBar style={tabHeadStyle} onTabClick={this.onTabClick}/>}
            renderTabContent={() => <TabContent animatedWithMargin />}
            activeKey={this.state.activeKey}
            onChange={this.onChange}
          >
            <TabPane style={tabContentStyle} tab={clipBoardIcon} key="1">
              <ClipBoard />
            </TabPane>
            <TabPane style={tabContentStyle} tab={codeIcon} key="2">
              <Code />
            </TabPane>
            <TabPane style={tabContentStyle} tab={linkIcon} key="3">
              Shortlink content will go here!
            </TabPane>
            <TabPane style={tabContentStyle} tab={listIcon} key="4">
              To do list will go here!
            </TabPane>
            <TabPane style={tabContentStyle} tab={clockIcon} key="5">
              All Kinds of Timer!
            </TabPane>
            <TabPane style={tabContentStyle} tab={toolIcon} key="6">
              Quick Action Bar!
            </TabPane>
          </Tabs>
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

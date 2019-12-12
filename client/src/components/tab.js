import React, { useState } from 'react';
import styled from '@emotion/styled';

import clipboardIcon from '../assets/icon/clipboard.svg';
import codeIcon from '../assets/icon/code.svg';
import linksIcon from '../assets/icon/links.svg';
import hashtagsIcon from '../assets/icon/hashtags.svg';
import imageIcon from '../assets/icon/image.svg';
import settingsIcon from '../assets/icon/settings.svg';
import { Root, Container, Content } from '../components/common';
import ClipBoard from './tools/clipboard';
import Code from './tools/code';
import Hashtag from './tools/hashtag';
import Image from './tools/image';
import Shortlink from './tools/shortlink';

const MainArea = styled.div`
    background-color: var(--primary-color);
    position: fixed;
    width: 100%;
`;

const TabBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Nav = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;

    li {
        padding: 15px;
        cursor: pointer;
        transition: 0.5s all;
        :hover {
            img {
                filter: grayscale(0.5);
            }
        }
        img {
            transition: 0.5s all;
            filter: grayscale(0.9);
        }
    }
    li.active {
        img {
            filter: grayscale(0);
        }
    }
`;

const MENU_LIST = {
    clipboard: {
        icon: clipboardIcon,
    },
    code: {
        icon: codeIcon,
    },
    links: {
        icon: linksIcon,
    },
    hashtags: {
        icon: hashtagsIcon,
    },
    image: {
        icon: imageIcon,
    },
};
const OPTION_LIST = ['Settings'];

const Tab = () => {
    const menus = Object.keys(MENU_LIST);
    const [activeMenu, setActiveMenu] = useState(menus[0]);
    return (
        <>
            <MainArea>
                <TabBar>
                    <Nav>
                        {menus.map((menu, index) => (
                            <li
                                key={index}
                                onClick={() => setActiveMenu(menu)}
                                className={activeMenu === menu ? 'active' : ''}
                            >
                                <img alt={menu} src={MENU_LIST[menu].icon} />
                            </li>
                        ))}
                    </Nav>
                    <Nav>
                        <li>
                            <img alt="image" src={settingsIcon} />
                        </li>
                    </Nav>
                </TabBar>
            </MainArea>
            <Container>
                {activeMenu === 'clipboard' && <ClipBoard />}
                {activeMenu === 'code' && <Code />}
                {activeMenu === 'links' && <Shortlink />}
                {activeMenu === 'hashtags' && <Hashtag />}
                {activeMenu === 'image' && <Image />}
            </Container>
        </>
    );
};

export default Tab;

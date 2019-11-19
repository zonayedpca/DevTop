import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const ItemMain = styled.div`
    position: relative;
    padding-right: 20px;
    margin-bottom: 25px;
    cursor: pointer;
    transition: 0.2s all;
    .text,
    .link,
    .color,
    .hashtag {
        font-size: 16px;
        line-height: 18px;
        color: var(--primary-color);
        span {
            position: relative;
            display: inline-block;
            top: 2.5px;
            margin-right: 5px;
            width: 18px;
            height: 18px;
            background: ${props => props.color};
            border-radius: 3px;
        }
    }
    .image {
        display: flex;
        align-items: center;
        justify-content: space-between;
        > * {
            flex: 1;
        }
        img {
            width: 120px;
        }
        ul {
            list-style: none;
            color: var(--primary-color);
            font-weight: 400;
            font-size: 13px;
            line-height: 18px;
        }
    }
    > ul {
        list-style: none;
        display: flex;
        margin-top: 2px;
        opacity: 0;
        transform: translateY(-15px);
        transition: 0.2s all;
        li {
            margin-right: 15px;
            font-size: 12px;
            line-height: 16px;
            color: var(--primary-light-color);
            :last-child {
                margin-right: 0;
            }
        }
        .clickable {
            :hover {
                color: var(--secondary-color);
            }
        }
    }
    :hover {
        .text,
        .color,
        .link,
        .hashtag {
            color: var(--secondary-color);
        }
        ul {
            opacity: 1;
            transform: translateY(0);
        }
        .close {
            opacity: 1;
        }
    }
    .close {
        position: absolute;
        top: 0;
        right: 0;
        padding-left: 15px;
        padding-bottom: 15px;
        opacity: 0;
        transition: 0.2s all;
        img {
            height: 10px;
            filter: grayscale(0.5) opacity(0.65);
            transition: 0.2s all;
        }
        :hover {
            img {
                filter: grayscale(0) opacity(1);
            }
        }
    }
`;

const COPY_TEXT = 'Click to Copy';

const Item = ({ type, content }) => {
    const [copyText, setCopyText] = useState(null);
    useEffect(() => {
        if (!copyText) {
            setCopyText(COPY_TEXT);
        }
        let copyTextTimeout;
        if (copyText !== COPY_TEXT) {
            copyTextTimeout = setTimeout(() => {
                setCopyText(COPY_TEXT);
            }, 1000);
        }
        return () => {
            clearTimeout(copyTextTimeout);
        };
    }, [copyText]);
    return (
        <ItemMain color={content} onClick={() => setCopyText('Copied!')}>
            <div className={type}>
                {type === 'image' ? (
                    <>
                        <div>
                            <img alt="copied image" src={content} />
                        </div>
                        <ul>
                            <li>Sky-balloons.jpg</li>
                            <li>5172x3456 Pixels</li>
                            <li>748 KB</li>
                        </ul>
                    </>
                ) : (
                    <>
                        {type === 'color' && <span />}{' '}
                        {type === 'hashtag' ? content : content}
                    </>
                )}
            </div>
            <ul className="action">
                <li>{copyText}</li>
                <li className="clickable">Favorite</li>
                {type === 'link' && <li className="clickable">Open Link</li>}
                {type === 'code' && <li className="clickable">Create Gist</li>}
                {type === 'hashtag' && <li className="clickable">Add Comma</li>}
                {type === 'image' && <li className="clickable">Open Image</li>}
                <li>6 Min Ago</li>
            </ul>
            <div className="close">
                <img alt="close" src={require('../../assets/icon/cross.svg')} />
            </div>
        </ItemMain>
    );
};

export { Item };

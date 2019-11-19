import React from 'react';
import styled from '@emotion/styled';

const ItemMain = styled.div`
    margin-bottom: 30px;
    cursor: pointer;
    .text {
        font-size: 16px;
        line-height: 18px;
        color: var(--primary-color);
    }
    ul {
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
    }
    :hover {
        ul {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const Item = ({ type, content }) => {
    return (
        <ItemMain>
            <div className={type}>{content}</div>
            <ul className="action">
                <li>Click to Copy</li>
                <li>Favorite</li>
                <li>6 Minutes Ago</li>
            </ul>
        </ItemMain>
    );
};

export default Item;

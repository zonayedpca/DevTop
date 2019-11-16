import React from 'react';
import styled from '@emotion/styled';

const ErrorMain = styled.div`
    display: flex;
    height: calc(100% - 130px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .msg {
        text-align: center;
        h2 {
            font-size: 24px;
            line-height: 32px;
            color: #201659;
            margin-bottom: 8px;
        }
        p {
            font-size: 16px;
            line-height: 21px;
            color: #9087c0;
        }
    }
    .img {
        position: fixed;
        bottom: -10px;
        left: 0;
        width: 100%;
        img {
            width: 100%;
        }
    }
`;

const Error = () => {
    return (
        <ErrorMain>
            <div className="msg">
                <h3>Just a Sand Dune, Nothing Else</h3>
                <p>Copy Anything, it will Appear Here</p>
            </div>
            <div className="img">
                <img
                    alt="error-mountains"
                    src={require('../../assets/image/mountain.svg')}
                />
            </div>
        </ErrorMain>
    );
};

export { Error };

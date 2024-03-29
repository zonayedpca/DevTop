import axios from 'axios';

import { TOKEN_RIGHT, TOKEN_WRONG, TOKEN_RESET, TOKEN_LOADING } from './type';

import {
    getLocalStorageData,
    setLocalStorageData,
    unSetLocalStorageData,
} from '../utils';

const GITHUB_LINK = `https://api.github.com`;
const BITLY_LINK = `https://api-ssl.bitly.com/v4`;

export const getLocalAuth = () => {
    const [github_token, bitly_token] = getLocalStorageData([
        'github',
        'bitly',
    ]);
    return dispatch => {
        if (github_token) {
            dispatch({
                type: TOKEN_RIGHT,
                payload: {
                    name: 'github',
                    token: github_token.token,
                },
            });
        }
        if (bitly_token) {
            dispatch({
                type: TOKEN_RIGHT,
                payload: {
                    name: 'bitly',
                    token: {
                        token: bitly_token.token.token,
                        id: bitly_token.token.id,
                    },
                },
            });
        }
    };
};

export const verifyGithubToken = token => {
    return async dispatch => {
        dispatch({
            type: TOKEN_LOADING,
            payload: {
                name: 'github',
            },
        });
        try {
            const { data } = await axios(`${GITHUB_LINK}/user`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (data.login) {
                dispatch({
                    type: TOKEN_RIGHT,
                    payload: {
                        name: 'github',
                        token,
                    },
                });
                setLocalStorageData('github', { token });
            }
        } catch (e) {
            dispatch({
                type: TOKEN_WRONG,
                payload: {
                    name: 'github',
                    error: true,
                },
            });
        }
    };
};

export const verifyBitlyToken = token => {
    return async dispatch => {
        dispatch({
            type: TOKEN_LOADING,
            payload: {
                name: 'bitly',
            },
        });
        try {
            const { data } = await axios(`${BITLY_LINK}/user`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (data.login) {
                dispatch({
                    type: TOKEN_RIGHT,
                    payload: {
                        name: 'bitly',
                        token: {
                            token,
                            id: data.default_group_guid,
                        },
                    },
                });
                setLocalStorageData('bitly', {
                    token: { token, id: data.default_group_guid },
                });
            }
        } catch (e) {
            dispatch({
                type: TOKEN_WRONG,
                payload: {
                    name: 'bitly',
                    error: true,
                },
            });
        }
    };
};

export const resetTokens = () => {
    return dispatch => {
        dispatch({
            type: TOKEN_RESET,
        });
        unSetLocalStorageData(['github', 'bitly']);
    };
};

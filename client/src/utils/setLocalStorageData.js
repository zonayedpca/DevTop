export const setLocalStorageData = (provider, data) => {
    localStorage.setItem(`${provider}`, JSON.stringify(data));
}
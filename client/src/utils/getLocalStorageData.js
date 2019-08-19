export const getLocalStorageData = (providers) => {
    return providers.map(provider => JSON.parse(localStorage.getItem(provider)));
}
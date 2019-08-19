export const unSetLocalStorageData = (providers) => {
    providers.forEach(provider => localStorage.removeItem(provider))
}
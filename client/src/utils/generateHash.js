export const generateHash = function(str) {
    var hash = 0,
        i,
        chr;
    if (String(str).length === 0) return hash;
    for (i = 0; i < String(str).length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
};

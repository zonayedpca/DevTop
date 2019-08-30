const SIZE_THRESHOLD = 100;

module.exports = (tray, window) => {
    const { display } = process;
    const { x, y, height, width } = tray.getBounds();
    const { height: winHeight, width: winWidth } = window.getBounds();
    let setX, setY;
    if(y < SIZE_THRESHOLD) {
        setX = x - (winWidth/2 - (width/2));
        setY = y + height;
    } else if(y > SIZE_THRESHOLD && y > (display.height - SIZE_THRESHOLD)) {
        setX = x - (winWidth/2 - (width/2));
        setY = y - winHeight;
    } else if(x < SIZE_THRESHOLD) {
        setX = x + width;
        setY = y - (winHeight - height);
    } else {
        setX = x - winWidth;
        setY = y - (winHeight - height);
    }
    return { setX, setY };
}
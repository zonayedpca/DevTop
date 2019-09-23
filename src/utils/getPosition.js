const SIZE_THRESHOLD = 100;

module.exports = (tray, window) => {
    const { display } = process;
    const { x, y, height, width } = tray.getBounds();
    const { height: winHeight, width: winWidth } = window.getBounds();
    let setX, setY;
    if(process.platform !== 'linux') {
	if(y < (SIZE_THRESHOLD + (winHeight / 2))) {
		// top
		setX = x - (winWidth/2 - (width/2));
		setY = y + height;
	    } else if(y > SIZE_THRESHOLD && y > (display.height - SIZE_THRESHOLD)) {
		// bottom
		setX = x - (winWidth/2 - (width/2));
		setY = y - winHeight;
	    } else if(x < (SIZE_THRESHOLD + winWidth)) {
		// left
        	setX = x + width;
        	setY = y - (winHeight - height);
    	} else {
        	// right
        	setX = x - winWidth;
        	setY = y - (winHeight - height);
    	}
    } else {
        // for linux
	setX= (display.height + winWidth/2);
	setY = display.y;	
    }
    
    return { setX, setY };
}

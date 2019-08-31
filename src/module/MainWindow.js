const { BrowserWindow, shell } = require('electron');

const { isDev } = require('../utils');

class MainWindow extends BrowserWindow {
    constructor(config, windowUrl) {
        super(config);
        !isDev() && this.setSkipTaskbar(true);
        this.loadURL(windowUrl);
        this.on('blur', this.onBlur.bind(this));
        this.webContents.on('will-navigate', this.onWillNavigate.bind(this));
    }

    onBlur() {
        !isDev() && this.hide();
    }

    onWillNavigate(event, url) {
        event.preventDefault();
        shell.openExternal(url);
    }
}

module.exports = MainWindow;

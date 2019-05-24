const { BrowserWindow, shell } = require('electron');

class MainWindow extends BrowserWindow {
  constructor(config, windowUrl) {
    super(config);
    this.setSkipTaskbar(true); // enable after development
    this.loadURL(windowUrl);
    this.on('blur', this.onBlur.bind(this));
    this.webContents.on('will-navigate', this.onWillNavigate.bind(this));
  }

  onBlur() {
    this.hide(); // enable this after development
  }

  onWillNavigate(event, url) {
    event.preventDefault();
    shell.openExternal(url);
  }
}

module.exports = MainWindow;

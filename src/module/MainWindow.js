const { BrowserWindow } = require('electron');

class MainWindow extends BrowserWindow {
  constructor(config, windowUrl) {
    super(config);
    this.loadURL(windowUrl);
  }
}

module.exports = MainWindow;

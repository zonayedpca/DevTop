const { BrowserWindow } = require('electron');

class MainWindow extends BrowserWindow {
  constructor(config, windowUrl) {
    super(config);
    // this.setSkipTaskbar(true); // enable after development
    this.loadURL(windowUrl);
    this.on('blur', this.onBlur.bind(this));
  }

  onBlur() {
    // this.hide(); // enable this after development
  }
}

module.exports = MainWindow;

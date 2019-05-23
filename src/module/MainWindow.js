const { BrowserWindow } = require('electron');

class MainWindow extends BrowserWindow {
  constructor(config, windowUrl) {
    super(config);
    this.loadURL(windowUrl);
    this.on('blur', this.onBlur.bind(this));
  }

  onBlur = () => {
    this.hide();
  }
}

module.exports = MainWindow;

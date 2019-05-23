const { app, Tray, Menu } = require('electron');

class ApplicationTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath);
    this.mainWindow = mainWindow;
    this.on('click', this.onClick.bind(this));
    this.on('right-click', this.onRightClick.bind(this));
    this.setToolTip('DevTop');
  }

  onClick = (event, bounds) => {
    const { x, y } = bounds;
    const { height, width } = this.mainWindow.getBounds();
    this.mainWindow.isVisible() ? this.mainWindow.hide() : this.mainWindow.show();
    if(process.env === 'darwin') {
      this.mainWindow.setBounds({
        x: x - (width/2),
        y: 0
      });
    } else {
      this.mainWindow.setBounds({
        x: x - (width/2),
        y: y - height
      });
    }
  }

  onRightClick = () => {
    const menuConfig = Menu.buildFromTemplate([
      {
        label: 'Quit',
        click: () => {
          app.quit()
        }
      }
    ]);
    this.popUpContextMenu(menuConfig);
  }
}

module.exports = ApplicationTray;

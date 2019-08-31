const { app, Tray, Menu } = require('electron');

const { getPosition } = require('../utils');

class ApplicationTray extends Tray {
    constructor(iconPath, mainWindow) {
        super(iconPath);
        this.mainWindow = mainWindow;
        this.on('click', this.onClick.bind(this));
        this.on('right-click', this.onRightClick.bind(this));
        this.setToolTip('DevTop');
    }

    onClick() {
        const { setX, setY } = getPosition(this, this.mainWindow);
        this.mainWindow.isVisible() ? this.mainWindow.hide() : this.mainWindow.show();
        this.mainWindow.setBounds({
            x: setX,
            y: setY
        });
    }

    onRightClick() {
        const menuConfig = Menu.buildFromTemplate([
            {
                label: 'Quit',
                click: () => {
                    app.quit();
                }
            }
        ]);
        this.popUpContextMenu(menuConfig);
    }
}

module.exports = ApplicationTray;

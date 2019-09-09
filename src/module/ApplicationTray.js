const { app, Tray, Menu, MenuItem, dialog } = require('electron');
const { autoUpdater } = require('electron-updater');

const { getPosition } = require('../utils');
const { autoLaunch, checkForUpdates } = require('../controller');

autoUpdater.allowPrerelease = true;
autoUpdater.autoDownload = false;

class ApplicationTray extends Tray {
    constructor(iconPath, mainWindow) {
        super(iconPath);
        this.mainWindow = mainWindow;
        this.on('click', this.onClick.bind(this));
        this.on('right-click', this.onRightClick.bind(this));
        this.setToolTip('DevTop');
        this.autoStart = false;
        this.setAutoStart();
        this.autoUpdater = autoUpdater;
        this.updates = checkForUpdates();
    }

    setAutoStart() {
        autoLaunch()
            .isEnabled()
            .then(isEnabled => {
                this.autoStart = isEnabled;
            });
    }

    checkForUpdates() {}

    toggleAutoLaunch() {
        autoLaunch()
            .isEnabled()
            .then(isEnabled => {
                if (isEnabled) {
                    autoLaunch()
                        .disable()
                        .then(() => {
                            this.autoStart = false;
                        })
                        .catch(err => {
                            console.log(err);
                        });
                } else {
                    autoLaunch()
                        .enable()
                        .then(() => {
                            this.autoStart = true;
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            });
    }

    onClick() {
        const { setX, setY } = getPosition(this, this.mainWindow);
        this.mainWindow.isVisible()
            ? this.mainWindow.hide()
            : this.mainWindow.show();
        this.mainWindow.setBounds({
            x: setX,
            y: setY,
        });
    }

    onRightClick() {
        const menu = new Menu();
        menu.append(
            new MenuItem({
                label: 'DevTop Essentials',
            })
        );
        menu.append(new MenuItem({ type: 'separator' }));
        menu.append(
            new MenuItem({
                label: 'Start on Startup',
                type: 'checkbox',
                checked: this.autoStart,
                click: () => {
                    this.toggleAutoLaunch();
                },
            })
        );
        menu.append(
            new MenuItem({
                label: 'Check for Updates',
                type: 'checkbox',
                click: () => {
                    console.log('Update check will be implemented here...');
                },
            })
        );
        menu.append(new MenuItem({ type: 'separator' }));
        menu.append(
            new MenuItem({
                label: 'Quit',
                click: () => {
                    app.quit();
                },
            })
        );
        this.popUpContextMenu(menu);
    }
}

module.exports = ApplicationTray;

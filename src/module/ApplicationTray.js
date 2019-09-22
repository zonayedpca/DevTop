const { app, Tray, Menu, MenuItem, shell } = require('electron');

const { getPosition } = require('../utils');
const { autoLaunch, checkForUpdates } = require('../controller');

class ApplicationTray extends Tray {
    constructor(iconPath, mainWindow) {
        super(iconPath);
        this.mainWindow = mainWindow;
        this.on('click', this.onClick.bind(this));
        this.on('right-click', this.onRightClick.bind(this));
        this.setToolTip('DevTop Essentials');
        this.autoStart = false;
        this.setAutoStart();
    }

    setAutoStart() {
        autoLaunch()
            .isEnabled()
            .then(isEnabled => {
                this.autoStart = isEnabled;
            });
    }

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
                click: () => {
                    shell.openExternalSync(
                        'https://github.com/zonayedpca/DevTop'
                    );
                },
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
                    checkForUpdates();
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

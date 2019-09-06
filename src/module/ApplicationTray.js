const { app, Tray, Menu, MenuItem, dialog } = require('electron');
const AutoLaunch = require('auto-launch');

const { getPosition } = require('../utils');

const devTopAutoLauncher = new AutoLaunch({
    name: 'DevTop',
});

class ApplicationTray extends Tray {
    constructor(iconPath, mainWindow) {
        super(iconPath);
        this.mainWindow = mainWindow;
        this.on('click', this.onClick.bind(this));
        this.on('right-click', this.onRightClick.bind(this));
        this.setToolTip('DevTop');
        this.autoStart = false;
        this.setAutoStart();
    }

    setAutoStart() {
        devTopAutoLauncher.isEnabled().then(isEnabled => {
            this.autoStart = isEnabled;
        });
    }

    toggleAutoLaunch() {
        devTopAutoLauncher.isEnabled().then(isEnabled => {
            if (isEnabled) {
                devTopAutoLauncher
                    .disable()
                    .then(() => {
                        this.autoStart = false;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                devTopAutoLauncher
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
                    const dialogOpts = {
                        type: 'info',
                        buttons: ['Ok', 'Cancel'],
                        title: 'Update is coming soon...',
                        message: 'DevTop Essential Update',
                        detail:
                            'Automated update option is going to be implemented in future, please update manually for now.',
                    };
                    dialog.showMessageBox(dialogOpts, response => {
                        if (response === 0) {
                            console.log('Dialog');
                        }
                    });
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

const { autoUpdater } = require('electron-updater');

class AppUpdater {
    constructor() {
        autoUpdater.checkForUpdatesAndNotify();
    }
}

module.exports = AppUpdater;

const { autoUpdater } = require('electron-updater');

class AppUpdater {
    constructor() {
        const log = require('electron-log');
        log.transports.file.level = 'debug';
        autoUpdater.logger = log;
        autoUpdater.checkForUpdatesAndNotify();
    }
}

module.exports = AppUpdater;

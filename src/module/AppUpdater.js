const { autoUpdater } = require('electron-updater');

const { isDev } = require('../utils');

class AppUpdater {
    constructor() {
        if(isDev) {
            const log = require('electron-log');
            log.transports.file.level = 'debug';
            autoUpdater.logger = log;
        }
        autoUpdater.checkForUpdatesAndNotify();
    }
}

module.exports = AppUpdater;

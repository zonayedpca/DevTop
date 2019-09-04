const { dialog } = require('electron');
const { autoUpdater } = require('electron-updater');

const { isDev } = require('../utils');

class AppUpdater {
    constructor() {
        autoUpdater.checkForUpdates();
        autoUpdater.on('update-downloaded', () => {
            if (!isDev()) {
                dialog.showMessageBox({
                    type: 'info',
                    title: 'Found Updates',
                    message: 'Found updates, do you want update now?',
                    buttons: ['Sure', 'No']
                }, (buttonIndex) => {
                    if (buttonIndex === 0) {
                        const isSilent = true;
                        const isForceRunAfter = true;
                        autoUpdater.quitAndInstall(isSilent, isForceRunAfter);
                    } else {
                        // updater.enabled = true
                        // updater = null
                    }
                });
            }

        });
    }
}

module.exports = AppUpdater;

const { dialog } = require('electron');
const { autoUpdater } = require('electron-updater');

const { isDev } = require('../utils');

let updater;
let appUpdater = {
    enabled: false,
};

autoUpdater.autoDownload = false;
autoUpdater.allowPrerelease = true;

autoUpdater.on('error', error => {
    dialog.showErrorBox(
        'Error: ',
        error == null ? 'unknown' : (error.stack || error).toString()
    );
});

autoUpdater.on('update-available', () => {
    dialog.showMessageBox(
        {
            type: 'info',
            title: 'Found Updates',
            message: 'Found updates, do you want update now?',
            buttons: ['Sure', 'No'],
        },
        buttonIndex => {
            if (buttonIndex === 0) {
                autoUpdater.downloadUpdate();
            } else {
                appUpdater.enabled = true;
                updater = null;
            }
        }
    );
});

autoUpdater.on('update-not-available', () => {
    dialog.showMessageBox({
        title: 'No Updates',
        message: 'Current version is up-to-date.',
    });
    appUpdater.enabled = true;
    updater = null;
});

autoUpdater.on('download-progress', ({ progress, percent, total }) => {
    dialog.showMessageBox({
        title: `${percent} Update in progress...`,
        message: `Update is in progress: ${progress}, total: ${total}`,
    });
});

autoUpdater.on('update-downloaded', () => {
    dialog.showMessageBox(
        {
            title: 'Install Updates',
            message:
                'Updates downloaded, application will be quit for update...',
        },
        () => {
            // eslint-disable-next-line no-undef
            setImmediate(() => autoUpdater.quitAndInstall());
        }
    );
});

function checkForUpdates(menuItem, focusedWindow, event) {
    updater = menuItem;
    appUpdater.enabled = false;
    if (!isDev()) autoUpdater.checkForUpdates();
}

module.exports = {
    checkForUpdates,
};

const { dialog, shell } = require('electron');
const { autoUpdater } = require('electron-updater');

const { isDev } = require('../utils');

// eslint-disable-next-line no-unused-vars
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

autoUpdater.on('update-available', ({ releaseNotes }) => {
    dialog.showMessageBox(
        {
            type: 'info',
            title: 'Found Updates',
            message: `New Update Found. You can manaullay download it
            
            Changelog:
            ${releaseNotes}
            `,
            buttons: ['Download Now', 'No'],
        },
        buttonIndex => {
            if (buttonIndex === 0) {
                shell.openExternalSync(
                    'https://github.com/zonayedpca/DevTop/releases'
                );
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

function checkForUpdates(menuItem) {
    updater = menuItem;
    appUpdater.enabled = false;
    if (!isDev()) autoUpdater.checkForUpdates();
}

module.exports = {
    checkForUpdates,
};

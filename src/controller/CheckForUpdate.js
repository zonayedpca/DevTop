const { autoUpdater } = require('electron-updater');

const status = {
    available: false,
    message: '',
};

const onUpdateAvailable = () => {
    status.available = true;
    status.message = 'Update Available.';
};

const onUpdateNotAvailable = () => {
    status.available = true;
    status.message = 'Update Not Available.';
};

const onCheckingUpdate = () => {
    status.available = true;
    status.message = 'Checking the Update...';
};

const checkForUpdate = () => {
    autoUpdater.allowPrerelease = true;
    autoUpdater.checkForUpdatesAndNotify();
    autoUpdater.on('update-available', onUpdateAvailable);
    autoUpdater.on('update-not-available', onUpdateNotAvailable);
    autoUpdater.on('checking-for-update', onCheckingUpdate);
    return status;
};

module.exports = {
    checkForUpdate,
};

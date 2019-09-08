const { autoUpdater } = require('electron-updater');

const status = {
    available: false,
    message: 'Cheking for the update...',
    details: 'We are currently checking your update. Please come back later...',
    updateAvailable: null,
};

const onUpdateAvailable = info => {
    status.available = true;
    status.message = 'Update Available.';
    status.details = 'A new update is available...';
    status.updateAvailable = info;
};

const onUpdateNotAvailable = () => {
    status.available = true;
    status.message = 'Update Not Available.';
    status.details = 'No Update Available';
    status.updateAvailable = null;
};

const onCheckingUpdate = () => {
    status.available = true;
    status.message = 'Checking the Update...';
    status.details =
        'We are currently checking your update. Please come back later...';
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

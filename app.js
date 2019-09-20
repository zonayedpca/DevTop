const { app } = require('electron');
const path = require('path');

const { setScreenSize } = require('./src/config');

const MainWindow = require('./src/module/MainWindow');
const ApplicationTray = require('./src/module/ApplicationTray');

const { clipboard, code } = require('./src/service');

const { isDev } = require('./src/utils');

const WINDOW_URL = isDev()
    ? 'http://localhost:3000'
    : `file://${__dirname}/client/build/index.html`;
const iconName =
    process.platform === 'darwin' ? 'iconTemplate.png' : 'windows-icon.png';
const iconPath = path.join(__dirname, `src/assets/img/${iconName}`);

let mainWindow;
// eslint-disable-next-line no-unused-vars
let tray;

app.on('ready', () => {
    if (process.platform === 'darwin') {
        app.dock.hide();
    }
    setScreenSize();
    mainWindow = new MainWindow(
        {
            height: 420,
            width: 360,
            frame: isDev() ? false : false,
            resizable: isDev() ? false : false,
            show: isDev() ? false : false,
            webPreferences: {
                devTools: isDev() ? false : false,
                backgroundThrottling: false,
                nodeIntegration: true,
            },
        },
        WINDOW_URL
    );
    tray = new ApplicationTray(iconPath, mainWindow);
    clipboard(mainWindow);
    code(mainWindow);
});

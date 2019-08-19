const { app } = require('electron');
const path = require('path');

const MainWindow = require('./src/module/MainWindow');
const ApplicationTray = require('./src/module/ApplicationTray');

const { clipboard, code, settings } = require('./src/service');

function isDev() {
  return process.mainModule.filename.indexOf('app.asar') === -1;
}

const WINDOW_URL = isDev() ? `http://localhost:3000` : `file://${__dirname}/client/build/index.html`;
const iconName = process.platform === 'darwin' ? 'iconTemplate.png':'windows-icon.png';
const iconPath = path.join(__dirname, `./src/assets/img/${iconName}`);

let mainWindow;
let tray;

app.on('ready', () => {
  mainWindow = new MainWindow({
    height: 420,
    width: 360,
    frame: isDev() ? true : false,
    resizable: isDev() ? true : false,
    show: isDev() ? true : false,
    webPreferences: { backgroundThrottling: false, nodeIntegration: true }
  }, WINDOW_URL);
  tray = new ApplicationTray(iconPath, mainWindow);
  clipboard(mainWindow);
  code(mainWindow);
  settings(mainWindow);
})

const { app, clipboard } = require('electron');
const path = require('path');

const MainWindow = require('./src/module/MainWindow');
const ApplicationTray = require('./src/module/ApplicationTray');

function isDev() {
  return process.mainModule.filename.indexOf('app.asar') === -1;
}

const currentClientDir = path.resolve('client');
const WINDOW_URL = isDev() ? `http://localhost:3000` : 'currentClientDir/build/index.html';
const iconName = process.platform === 'darwin' ? 'iconTemplate.png':'windows-icon.png';
const iconPath = path.join(__dirname, `./src/assets/img/${iconName}`);

let mainWindow;
let tray;

app.on('ready', () => {
  // app.dock.hide(); // for iOS
  let clipboardText = clipboard.readText();
  let text;
  setInterval(() => {
    text = clipboard.readText();
    if(clipboardText !== text) {
      clipboardText = text;
      mainWindow.webContents.send('clipboard:send', text);
    }
  }, 1000)
  mainWindow = new MainWindow({
    height: 420,
    width: 360,
    // frame: false,
    // resizable: false,
    show: false,
    webPreferences: { backgroundThrottling: false }
  }, WINDOW_URL);
  tray = new ApplicationTray(iconPath, mainWindow);
})

const { app, BrowserWindow, Tray } = require('electron');
const path = require('path');

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
  mainWindow = new BrowserWindow({
    height: 420,
    width: 360,
    frame: false,
    resizable: false,
    show: false
  });
  mainWindow.loadURL(WINDOW_URL);
  tray = new Tray(iconPath);
  tray.on('click', (event, bounds) => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
    const { x, y } = bounds;
    const { height, width } = mainWindow.getBounds();
    if(process.env === 'darwin') {
      mainWindow.setBounds({
        x: x - (width/2),
        y: 0
      });
    } else {
      mainWindow.setBounds({
        x: x - (width/2),
        y: y - height
      });
    }
  })
})

const { app, BrowserWindow } = require('electron');
const path = require('path');

function isDev() {
  return process.mainModule.filename.indexOf('app.asar') === -1;
}

const currentClientDir = path.resolve('client');
const WINDOW_URL = isDev() ? `http://localhost:3000` : 'currentClientDir/build/index.html';
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 400,
    width: 360,
    frame: false,
    resizable: false
  });
  mainWindow.loadURL(WINDOW_URL);
})

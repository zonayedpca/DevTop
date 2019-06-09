const { ipcMain } = require('electron');

const MainWindow = require('../module/MainWindow');

function isDev() {
  return process.mainModule.filename.indexOf('app.asar') === -1;
}

const WINDOW_URL = isDev() ? `${__dirname}/../../client/public/settings.html` : 'currentClientDir/build/settings.html';

let settingsWindow;

module.exports = mainWindow => {
  settingsWindow = new MainWindow({
    height: 420,
    width: 360,
    resizable: true,
    show: false,
    webPreferences: { nodeIntegration: true }
  }, WINDOW_URL);

  settingsWindow.on('close', event => {
    // event.preventDefault();
    settingsWindow.hide();
  })

  if(isDev()){
    console.log('is in dev');
    settingsWindow.webContents.on('did-finish-load', () => {
      settingsWindow.webContents.send('test');
    })
  }

  ipcMain.on('window:settings', (event, link) => {
    settingsWindow.isVisible() ? settingsWindow.hide() : settingsWindow.show();
  });

  ipcMain.on('option:githubToken', (event, token) => {
    mainWindow.webContents.send('option:githubToken', token);
  });

  ipcMain.on('option:bitlyToken', (event, token) => {
    mainWindow.webContents.send('option:bitlyToken', token);
  });

  ipcMain.on('option:githubTokenRight', () => {
    settingsWindow.webContents.send('option:githubTokenRight');
  });

  ipcMain.on('option:bitlyTokenRight', () => {
    settingsWindow.webContents.send('option:bitlyTokenRight');
  });

  ipcMain.on('option:githubTokenWrong', () => {
    console.log('option:githubTokenWrong');
    settingsWindow.webContents.send('option:githubTokenWrong');
  });

  ipcMain.on('option:bitlyTokenWrong', () => {
    settingsWindow.webContents.send('option:bitlyTokenWrong');
  });
}

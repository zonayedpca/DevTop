const { ipcMain, clipboard } = require('electron');

module.exports = mainWindow => {
  ipcMain.on('code:copy', (event, link) => {
    clipboard.writeText(link);
    mainWindow.webContents.send('code:copied');
  });
}

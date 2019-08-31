const { ipcMain, clipboard } = require('electron');

module.exports = mainWindow => {
    let clipboardListener = null;
    ipcMain.on('clipboard:play', () => {
        clearInterval(clipboardListener);
        mainWindow.webContents.send('clipboard:play');
        let clipboardText = clipboard.readText();
        let text;
        clipboardListener = setInterval(() => {
            text = clipboard.readText();
            if(clipboardText !== text && text.length) {
                clipboardText = text;
                mainWindow.webContents.send('clipboard:send', text);
            }
        }, 2000);
    });

    ipcMain.on('clipboard:pause', () => {
        clearInterval(clipboardListener);
        mainWindow.webContents.send('clipboard:pause');
    });

    ipcMain.on('clipboard:copy', (event, data) => {
        clipboard.writeText(data);
    });
};

module.exports = () => {
    const screen = require('electron').screen
    const { x, y, width, height } = screen.getPrimaryDisplay().workArea;
    process.display = {
        x, y, width, height
    }
}
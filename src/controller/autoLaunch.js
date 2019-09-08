const AutoLaunch = require('auto-launch');

const autoLaunch = () => {
    const devTopAutoLauncher = new AutoLaunch({
        name: 'DevTop',
    });
    return devTopAutoLauncher;
};

module.exports = {
    autoLaunch,
};

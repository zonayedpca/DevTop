const AutoLaunch = require('auto-launch');

class AppAutoLaunch {
    constructor() {
        this.devTopAutoLauncher = new AutoLaunch({
            name: 'DevTop',
        });
        this.status = false;
        return this.status;
    }

    checkAutoLaunch() {
        this.devTopAutoLauncher.isEnabled().then(isEnabled => {
            this.status = isEnabled;
        });
    }

    toggleAutoLaunch() {
        if (!this.status) {
            return this.devTopAutoLauncher.enable().then(() => {
                console.log('Enabled');
                this.status = true;
            });
        } else {
            return this.devTopAutoLauncher.disable().then(() => {
                console.log('Disabled');
                this.status = false;
            });
        }
    }

    enableAutoLaunch() {
        if (!this.checkAutoLaunch()) {
            this.devTopAutoLauncher.enable();
        }
    }

    disableAutoLaunch() {
        if (this.checkAutoLaunch()) {
            this.devTopAutoLauncher.disable();
        }
    }
}

module.exports = AppAutoLaunch;

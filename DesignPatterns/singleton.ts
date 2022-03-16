class Settings {
    private static _instance: Settings;

    private constructor() {}

    public static getInstance() {
        if (!this._instance) {
            this._instance = new Settings();
        }

        return this._instance;
    }
}

const settings = Settings.getInstance();

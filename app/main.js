'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWin = null;

function CreateWindow() {
    mainWin = new BrowserWindow({
        width: 800,
        height: 600,
        alwaysOnTop: true,
    });
    mainWin.setMenu(null);
    mainWin.loadURL('file://' + __dirname + '/window.html');
    // NOTE: for debug
    // mainWin.webContents.openDevTools();

    mainWin.on('closed', () => {
        mainWin = null;
    });
}

app.on('ready', CreateWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWin === null) {
        CreateWindow();
    }
});

/*jshint esversion: 6 */

const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron');
const path = require('path');
const url = require('url');

const tableEventHandlers = require('./handlers/table.handler');

// require('electron-reload')(__dirname);

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  // load the dist folder from Angular
  win.loadURL(url.format({
    pathname: path.join(__dirname, '../../dist/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools optionally:
  win.webContents.openDevTools({
    mode: 'detach',
  });

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

// IPCMain events handlers
ipcMain.on('table.getMapping', tableEventHandlers.getMapping);
ipcMain.on('table.migrate', tableEventHandlers.migrate);
ipcMain.on('table.generateNewMapping', tableEventHandlers.generateNewMapping);
// ipcMain.on('table.migrate', TableHandler.getMapping);

// ipcMain.on('migrate', require('./handlers/migrate-handler'));

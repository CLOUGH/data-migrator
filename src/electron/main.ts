/*jshint esversion: 6 */
require('ts-node').register();
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const TableHandler = require('./handlers/table-handler');
let win;
// import { TableHandler } from './handlers/table-handler';

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
  // win.webContents.openDevTools()

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

console.log('reaach2');

// IPCMain events handlers
ipcMain.on('table.getMapping', TableHandler.getMapping);
// ipcMain.on('table.migrate', TableHandler.getMapping);
// ipcMain.on('migrate', require('./handlers/migrate-handler'));

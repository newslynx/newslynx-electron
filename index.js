'use strict';
var newslynx = require('newslynx'),
    port = 3690;
// var updater = require('electron-updater');

const app = require('app');
const BrowserWindow = require('browser-window');

// report crashes to the Electron project
require('crash-reporter').start();

// adds debug features like hotkeys for triggering dev tools and reload
// require('electron-debug')();

function createMainWindow () {
	const win = new BrowserWindow({
		width: 1350,
		height: 768,
		resizable: true
	});

	win.loadUrl('http://localhost:'+port);
	win.on('closed', onClosed);
	win.openDevTools({detach:false}) 
  // updater.on('updateRequired', function () {       
  // 	console.log('update required') 
  //   win.webContents.send('update-available');
  //   app.quit();
  // })
  // updater.on('updateAvailable', function () {
  // 	console.log('update available')
  // })
  // updater.start()

	return win;
}

function onClosed() {
	// deref the window
	// for multiple windows store them in an array
	mainWindow = null;
}

// prevent window being GC'd
let mainWindow;

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate-with-no-open-windows', function () {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', function () {
	newslynx.run(port, function(){
  	mainWindow = createMainWindow();
    
  });
});

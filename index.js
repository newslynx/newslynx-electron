'use strict';

var newslynx = require('newslynx'),
    port = 3690;

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

	return win;
}

var gh_releases = require('electron-gh-releases')

var options = {
  repo: 'newslynx/newslynx-electron',
  currentVersion: app.getVersion()
}

var update = new gh_releases(options, function (auto_updater) {
  // Auto updater event listener
  auto_updater.on('update-downloaded', function (e, rNotes, rName, rDate, uUrl, quitAndUpdate) {
    // Install the update
    quitAndUpdate()
  })
})

// Check for updates
update.check(function (err, status) {
  if (!err && status) {
    update.download()
  } else {
    console.log('ERROR updating', err)
  }
})

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

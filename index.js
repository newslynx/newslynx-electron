'use strict';

var yaml = require('js-yaml'),
    _ = require('underscore'),
    path = require('path'),
    fs = require('fs');

var newslynx_config_lib = require('newslynx-app-config'),
    local_settings,
    newslynx_config;


if (_.isEmpty(newslynx_config_lib.config)){
  local_settings = yaml.load(fs.readFileSync(path.join(__dirname, '/config.yaml'), 'utf-8'));
  newslynx_config = _.extend({}, newslynx_config_lib.config, local_settings);

  newslynx_config_lib.save(newslynx_config);
}

var newslynx = require('newslynx'),
    port = 3690;

const app = require('app');
const BrowserWindow = require('browser-window');

// report crashes to the Electron project
require('crash-reporter').start();

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
	newslynx.run(port, null, function(){
  	mainWindow = createMainWindow();
  });
});

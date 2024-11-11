const { app, BrowserWindow } = require('electron');
const path = require('path');

let isDev = true;
let mainWindow = null;

const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: isDev ? 1200 : 800,
		height: isDev ? 900 : 600,
		webPreferences: {
			preload: path.join(__dirname, 'electron', 'preload.js'),
		},
	});

	// Main window HTML file
	mainWindow.loadFile(path.join(__dirname, 'frontend', 'html', 'index.html'));

	// Open developer tools in dev mode
	isDev
		? mainWindow.webContents.openDevTools()
		: mainWindow.webContents.closeDevTools();
};

// When Electron has loaded the app, create browser window
app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

// const electron = require("electron");
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;

// const path = require("path");
// // const os = require("os");
// const isDev = require("electron-is-dev");

// let mainWindow;

// function createWindow() {
//   mainWindow = new BrowserWindow({ width: 900, height: 680 });
//   mainWindow.loadURL(
//     // isDev
//     //   ? "http://localhost:3000"
//     //   : `file://${path.join(__dirname, "../build/index.html")}`

//     `file://${path.join(__dirname, "../build/index.html")}`
//   );

//   console.log(__dirname);
//   if (isDev) {
//     // Open the DevTools.
//     // BrowserWindow.addDevToolsExtension(
//     //   path.join(
//     //     os.homedir() +
//     //       "/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.7.0_0"
//     //   )
//     // );
//     mainWindow.webContents.openDevTools();
//   }
//   mainWindow.on("closed", () => (mainWindow = null));
// }

// app.on("ready", createWindow);

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });

// app.on("activate", () => {
//   if (mainWindow === null) {
//     createWindow();
//   }
// });

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const url = require("url");
const { channels } = require("../src/shared/constants");

let mainWindow;
function createWindow() {
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "../index.html"),
      protocol: "file:",
      slashes: true,
    });
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.loadURL(startUrl);
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}
app.on("ready", createWindow);
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on(channels.APP_INFO, (event) => {
  event.sender.send(channels.APP_INFO, {
    appName: app.getName(),
    appVersion: app.getVersion(),
  });
});

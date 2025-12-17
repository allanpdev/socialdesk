const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

function createLoginWindow(){
    const loginWindow = new BrowserWindow({
        width: 380,
        height: 380,
        autoHideMenuBar: true,
        resizable: false,
        frame: false,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    loginWindow.loadURL('http://localhost:5173/#/login')

    loginWindow.webContents.once('did-finish-load', () => {
        loginWindow.show()
    })

    ipcMain.on('closeWindow', () => {
        loginWindow.close()
    })

    ipcMain.on('minimizeWindow', () => {
        loginWindow.minimize()
    })

    ipcMain.on('alternateWindow', () => {
        loginWindow.close()
        createSystemWindow()
    })
}



function createSystemWindow(){
    const systemWindow = new BrowserWindow({
        width: 1100,
        height: 800,
        autoHideMenuBar: true,
        resizable: true,
        frame: false,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    systemWindow.loadURL('http://localhost:5173')
}

app.whenReady().then(() => {
    createLoginWindow()
    // createSystemWindow()
})
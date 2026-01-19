const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

function createLoginWindow(){
    const loginWindow = new BrowserWindow({
        width: 350,
        height: 350,
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

    ipcMain.on('successLogin', () => {
        loginWindow.close()
        createSystemWindow()
    })
}

function createSystemWindow(){
    const systemWindow = new BrowserWindow({
        width: 1100,
        height: 800,
        minWidth: 600,
        minHeight: 300,
        show: false,
        autoHideMenuBar: true,
        resizable: true,
        frame: false,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: false
        }
    })

    // systemWindow.loadURL('http://localhost:5173/#/sistema')
    systemWindow.loadFile(path.join(__dirname, "frontend/dist/index.html"))


    systemWindow.once('ready-to-show', () => {
        systemWindow.show()
    })

    ipcMain.on('minimizeWindow', () => {
        systemWindow.minimize()
    })
    ipcMain.on('maximizeWindow', () => {
        if(systemWindow.isMaximized()){
            systemWindow.unmaximize()
        }else{
            systemWindow.maximize()
        }
    })
    ipcMain.on('closeWindow', () => {
        systemWindow.close()
    })
}

app.whenReady().then(() => {
    // createLoginWindow()
    createSystemWindow()
})
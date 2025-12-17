const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electron', {
    minimizeWindow: () => ipcRenderer.send('minimizeWindow'),
    closeWindow: () => ipcRenderer.send('closeWindow'),
    alternateWindow: () => ipcRenderer.send('alternateWindow')
})
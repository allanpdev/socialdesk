const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electron', {
    minimizeWindow: () => ipcRenderer.send('minimizeWindow'),
    maximizeWindow: () => ipcRenderer.send('maximizeWindow'),
    closeWindow: () => ipcRenderer.send('closeWindow'),
    successLogin: () => ipcRenderer.send('successLogin')
})
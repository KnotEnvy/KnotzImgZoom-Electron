const { contextBridge, remote } = require('electron')

contextBridge.exposeInMainWorld(
  'electron',
  {
    dialog: remote.dialog
  }
)

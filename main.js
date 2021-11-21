const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600
    })

    mainWindow.setMenuBarVisibility(false)
  
    mainWindow.loadFile('src/index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })
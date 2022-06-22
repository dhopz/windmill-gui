const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    title:"Windmill Inventory",
    width: 1200,
    height: 700,
    maxHeight:700,
    maxWidth:800,
    minHeight:400,
    minWidth:400,
    // backgroundColor:'#7B435B',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule:true,
      contextIsolation: false,
    }
  })

//   const child = new BrowserWindow({ 
//     parent: win,
//     width: 800,
//     height: 600,
//     show:false
// })
  //child.loadURL("https://5349036.app.netsuite.com/app/login/secure/enterpriselogin.nl?c=5349036&redirect=%2Fapp%2Fcenter%2Fcard.nl%3Fsc%3D-29%26whence%3D&whence=")
  // child.loadURL('https://github.com')
//show as soon as the file is rendered
  // child.once('ready-to-show', () => {   child.show() })
  win.show()

  //load the index.html from a url
  win.loadURL('http://localhost:3000');

  // Open the DevTools.
  win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    frame:false,
    maxWidth:500,
    MaxHeight: 500,
    transparent:true,
    alwaysOnTop:true
  })
  win.loadFile('index.html')
  win.setPosition(800,300)
  //win.loadURL("https://www.youtube.com/watch?v=d7TleOmBKg4&list=PL7ZwE005lvhpwy5LoKj8FXi2MXtJyey54")
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on("window-all-closed", () => {
  if(process.platform !== 'darwin') app.quit()
})
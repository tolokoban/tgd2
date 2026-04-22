import Path from "node:path"
import { app, BrowserWindow, ipcMain } from "electron"
import { compareImage, readReference, writeReference } from "./references"

const isDev = !app.isPackaged

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: Path.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
        },
    })

    if (isDev) {
        win.loadURL("http://localhost:9321")
        win.webContents.openDevTools()
    } else {
        win.loadFile(Path.join(__dirname, "../front/index.html"))
    }
}

app.whenReady().then(() => {
    ipcMain.handle("compare-image", async (_event, name: string, imageData: Buffer) => {
        return compareImage(name, imageData)
    })

    ipcMain.handle("read-reference", async (_event, name: string) => {
        return readReference(name)
    })

    ipcMain.handle("write-reference", async (_event, name: string, imageData: Buffer) => {
        return writeReference(name, imageData)
    })

    createWindow()

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit()
})

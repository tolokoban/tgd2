import Path from "node:path"
import { app, BrowserWindow, ipcMain, Menu } from "electron"
import { compareImage, deleteReference, makeWebp, readReference, writeReference } from "./references"

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

    /**
     * Ensure that `window.electronAPI` is also available when opening a link in a new window.
     */
    win.webContents.setWindowOpenHandler(({ url }) => {
        return {
            action: "allow",
            overrideBrowserWindowOptions: {
                webPreferences: {
                    preload: Path.join(__dirname, "preload.js"),
                    contextIsolation: true,
                    nodeIntegration: false,
                },
            },
        }
    })

    if (isDev) {
        win.loadURL("http://localhost:9321")
        // win.webContents.openDevTools()
    } else {
        win.loadFile(Path.join(__dirname, "../front/index.html"))
    }
}

app.whenReady().then(() => {
    Menu.setApplicationMenu(null)

    ipcMain.handle("compare-image", async (_event, name: string, imageData: Buffer) => {
        return compareImage(name, imageData)
    })

    ipcMain.handle("read-reference", async (_event, name: string) => {
        return readReference(name)
    })

    ipcMain.handle("delete-reference", async (_event, name: string) => {
        return deleteReference(name)
    })

    ipcMain.handle("write-reference", async (_event, name: string, imageData: Buffer) => {
        return writeReference(name, imageData)
    })

    ipcMain.handle("make-webp", async (_event, imageData: Buffer) => {
        return makeWebp(imageData)
    })

    createWindow()

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit()
})

import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld("electronAPI", {
    compareImage: (name: string, imageData: ArrayBuffer) =>
        ipcRenderer.invoke("compare-image", name, Buffer.from(imageData)),
    readReference: (name: string) =>
        ipcRenderer.invoke("read-reference", name),
    writeReference: (name: string, imageData: ArrayBuffer) =>
        ipcRenderer.invoke("write-reference", name, Buffer.from(imageData)),
})

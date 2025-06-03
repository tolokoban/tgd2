import View from "@/components/demo/Tgd"
import { useVolumeToMeshManager } from "./_/manager"

export default function Page() {
    const manager = useVolumeToMeshManager()
    return (
        <div>
            <View onReady={context => (manager.context = context)} />
        </div>
    )
}

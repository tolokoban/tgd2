/// <reference types="react" />
import { Scene } from "tgd2";
interface SceneViewProps {
    className?: string;
    options?: WebGLContextAttributes;
    onReady?(scene: Scene): void;
}
export default function SceneView({ className, options, onReady, }: SceneViewProps): JSX.Element;
export {};
//# sourceMappingURL=scene.d.ts.map
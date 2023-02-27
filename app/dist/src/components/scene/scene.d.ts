/// <reference types="react" />
import { PainterInterface } from "tgd2/painter/painter-interface";
import { Scene } from "tgd2";
interface SceneViewProps {
    className?: string;
    painters: PainterInterface[];
    options?: WebGLContextAttributes;
    onReady?(scene: Scene): void;
}
export default function SceneView({ className, painters, options, onReady, }: SceneViewProps): JSX.Element;
export {};
//# sourceMappingURL=scene.d.ts.map
import { Scene } from "tgd2";
interface SceneViewProps {
    className?: string;
    options?: WebGLContextAttributes;
    onReady?(scene: Scene): void;
}
export default function SceneView({ className, options, onReady, }: SceneViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=scene.d.ts.map
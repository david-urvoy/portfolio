import { Experience } from '@/three/experience'
import { Canvas } from '@react-three/fiber'

export function App() {
    return (
        <div className="graph-3d fixed h-full w-full">
            <Canvas>
                <Experience />
            </Canvas>
        </div>
    )
}

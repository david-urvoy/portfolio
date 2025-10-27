import { Experience } from '@/three/experience'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

export function App() {
    return (
        <div className="fixed top-0 left-0 h-full w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <Suspense fallback={null}>
                    <Experience />
                </Suspense>
            </Canvas>
        </div>
    )
}

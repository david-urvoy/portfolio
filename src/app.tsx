import { Experience } from '@/three/experience'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

export function App() {
    const is3DActive = window.location.search.includes('3d=true')

    return (
        <div className="fixed top-0 left-0 h-full w-full">
            <Canvas
                hidden={!is3DActive}
                camera={{ position: [0, 0, 5], fov: 50 }}
            >
                <Suspense fallback={null}>
                    <Experience />
                </Suspense>
            </Canvas>
        </div>
    )
}

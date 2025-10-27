import { Center, Float, Text3D } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { type Mesh, Vector3 } from 'three'

export function Experience() {
    const textRef = useRef<Mesh>(null)
    const offset = new Vector3(0, 0, -3)
    const [textSize, setTextSize] = useState(0.5)

    useEffect(() => {
        function updateSize() {
            const maxWidth = 1200
            const minSize = 0.2
            const maxSize = 0.6
            const sizeFactor = Math.min(window.innerWidth / maxWidth, 1)
            setTextSize(minSize + (maxSize - minSize) * sizeFactor)
        }

        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    useFrame(({ camera }) => {
        if (!textRef.current) return

        textRef.current.position.copy(camera.position).add(offset)
        textRef.current.lookAt(camera.position)
    })

    return (
        <>
            <Center>
                <Float speed={2} rotationIntensity={5} floatIntensity={5}>
                    <Text3D
                        font="/portfolio/fonts/Inter_Bold.json"
                        size={textSize}
                        letterSpacing={0.01}
                        height={0.1}
                    >
                        Hello, world!
                        <meshStandardMaterial color="#ff6600" />
                    </Text3D>
                </Float>
            </Center>
            <ambientLight intensity={0.5} />
        </>
    )
}

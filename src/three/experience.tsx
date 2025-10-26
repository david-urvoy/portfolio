import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Vector3, type Mesh } from 'three'

export function Experience() {
    const textRef = useRef<Mesh>(null)
    const pointerTarget = useRef<Vector3>(new Vector3())

    useFrame(({ pointer }) => {
        if (!textRef.current) return

        pointerTarget.current.lerp({ x: pointer.x, y: pointer.y, z: 0 }, 0.1)
        textRef.current.position.copy(pointerTarget.current)
        textRef.current.rotation.y = pointer.x * 0.5
        textRef.current.rotation.z = pointer.x * 0.5
    })

    return (
        <Text color={'red'} ref={textRef}>
            Hello, world!
        </Text>
    )
}

"use client"
import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'

const RAVisualization = () => {
    const [showInflammation, setShowInflammation] = useState(false)

    return (
        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-8">Rheumatoid Arthritis 3D Visualization</h1>
                <div className="relative h-[600px]">
                    <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <JointModel showInflammation={showInflammation} />
                        <OrbitControls />
                    </Canvas>
                    <div className="absolute top-4 left-4">
                        <label className="cursor-pointer label">
                            <span className="label-text mr-2">Show Inflammation</span>
                            <input
                                type="checkbox"
                                className="toggle toggle-primary"
                                checked={showInflammation}
                                onChange={() => setShowInflammation(!showInflammation)}
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

const JointModel = ({ showInflammation }) => {
    const jointRef = useRef()

    useFrame(() => {
        if (jointRef.current) {
            jointRef.current.rotation.y += 0.005
        }
    })

    return (
        <group ref={jointRef}>
            {/* Proximal phalanx */}
            <mesh position={[0, 1, 0]}>
                <cylinderGeometry args={[0.4, 0.5, 2, 32]} />
                <meshStandardMaterial color="#e0d0c0" />
            </mesh>

            {/* Distal phalanx */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[0.5, 0.4, 2, 32]} />
                <meshStandardMaterial color="#e0d0c0" />
            </mesh>

            {/* Joint capsule */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.7, 32, 32]} />
                <meshStandardMaterial color="#ff9999" transparent opacity={0.5} />
            </mesh>

            {/* Cartilage */}
            <mesh position={[0, 0.1, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.7} />
            </mesh>

            {/* Inflammation */}
            {showInflammation && (
                <group>
                    <mesh position={[0, 0, 0]}>
                        <sphereGeometry args={[0.9, 32, 32]} />
                        <meshStandardMaterial color="#ff0000" transparent opacity={0.3} />
                    </mesh>
                    <Text
                        position={[2, 0, 0]}
                        color="red"
                        fontSize={0.5}
                        maxWidth={2}
                        textAlign="left"
                    >
                        Inflammation
                    </Text>
                </group>
            )}

            {/* Labels */}
            <Text
                position={[1.5, 1, 0]}
                color="black"
                fontSize={0.3}
                maxWidth={2}
                textAlign="left"
            >
                Proximal Phalanx
            </Text>
            <Text
                position={[1.5, -1, 0]}
                color="black"
                fontSize={0.3}
                maxWidth={2}
                textAlign="left"
            >
                Distal Phalanx
            </Text>
            <Text
                position={[1.5, 0, 0]}
                color="black"
                fontSize={0.3}
                maxWidth={2}
                textAlign="left"
            >
                Joint Capsule
            </Text>
        </group>
    )
}

export default RAVisualization
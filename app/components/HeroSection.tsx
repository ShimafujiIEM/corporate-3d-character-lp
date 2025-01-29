"use client"

import { useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Model() {
  const { scene } = useGLTF("/assets/3d/duck.glb")
  return <primitive object={scene} scale={2} position={[0, -1, 0]} rotation={[0.3, 3.8, 0]} />
}

export default function HeroSection() {
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
    }
  }

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-white to-blue-50">
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">あなたのブランドを3Dキャラクターで表現</h1>
        <p className="text-xl mb-8 text-gray-700">
          希望のイメージを元に、オリジナルの3Dキャラクターを制作。最短1ヶ月で納品！
        </p>
        <Button className="bg-blue-900 text-white px-10 py-8 text-lg rounded-lg hover:bg-blue-800 transition-colors duration-300">
          今すぐ依頼する
        </Button>
      </div>
      <div className="w-full md:w-1/2 h-[400px] md:h-screen">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Model />
          <OrbitControls enableZoom={false} />
          <Environment preset="studio" />
        </Canvas>
      </div>
    </section>
  )
}


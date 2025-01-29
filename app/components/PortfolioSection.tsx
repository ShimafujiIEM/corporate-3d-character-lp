"use client"

import { useState } from "react"
import Image from "next/image"

const portfolioItems = [
  { id: 1, before: "/assets/images/comp.png", after: "/assets/images/laph.png", alt: "Character 1" },
  { id: 2, before: "/assets/images/comp.png", after: "/assets/images/laph.png", alt: "Character 2" },
  { id: 3, before: "/assets/images/comp.png", after: "/assets/images/laph.png", alt: "Character 3" },
  { id: 4, before: "/assets/images/comp.png", after: "/assets/images/laph.png", alt: "Character 4" },
]

export default function PortfolioSection() {
  const [activeItem, setActiveItem] = useState(0)
  const [sliderValue, setSliderValue] = useState(50)

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value))
  }

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">制作実績</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`cursor-pointer overflow-hidden rounded-lg ${
                index === activeItem ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => setActiveItem(index)}
            >
              <Image
                src={item.after || "/placeholder.svg"}
                alt={item.alt}
                width={300}
                height={300}
                className="w-auto h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="relative w-full h-[400px] md:h-[600px]">
          <div className="absolute inset-0">
            <Image
              src={portfolioItems[activeItem].before || "/placeholder.svg"}
              alt={`Before ${portfolioItems[activeItem].alt}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}>
            <Image
              src={portfolioItems[activeItem].after || "/placeholder.svg"}
              alt={`After ${portfolioItems[activeItem].alt}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
            className="absolute top-1/2 left-0 right-0 w-full"
            style={{ zIndex: 10 }}
          />
        </div>
      </div>
    </section>
  )
}


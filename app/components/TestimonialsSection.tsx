"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "山田太郎",
    company: "株式会社ABC",
    comment: "3Dキャラクターの導入で、ブランドの認知度が大幅に向上しました。素晴らしい仕上がりに大満足です。",
    rating: 5,
    logo: "/placeholder-logo.svg",
  },
  {
    name: "鈴木花子",
    company: "DEF株式会社",
    comment: "スピーディーな対応と高品質な成果物に感動しました。今後も継続的に利用したいと思います。",
    rating: 5,
    logo: "/placeholder-logo.svg",
  },
  {
    name: "佐藤次郎",
    company: "GHI工業",
    comment: "3Dキャラクターを使用したプロモーションで、顧客エンゲージメントが劇的に向上しました。",
    rating: 5,
    logo: "/placeholder-logo.svg",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">お客様の声</h2>
        <div className="relative">
          <div className="flex items-center justify-center">
            <button onClick={prevTestimonial} className="absolute left-0 z-10">
              <ChevronLeft className="h-8 w-8 text-gray-400 hover:text-gray-600" />
            </button>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl">
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonials[currentIndex].comment}</p>
              <div className="flex items-center">
                <Image
                  src={testimonials[currentIndex].logo || "/placeholder.svg"}
                  alt={testimonials[currentIndex].company}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-600">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
            <button onClick={nextTestimonial} className="absolute right-0 z-10">
              <ChevronRight className="h-8 w-8 text-gray-400 hover:text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              xRsion
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center flex-1">
            <Link href="#services" className="mx-3 text-gray-700 hover:text-gray-900">
              サービス
            </Link>
            <Link href="#portfolio" className="mx-3 text-gray-700 hover:text-gray-900">
              制作実績
            </Link>
            <Link href="#pricing" className="mx-3 text-gray-700 hover:text-gray-900">
              料金
            </Link>
            <Link href="#faq" className="mx-3 text-gray-700 hover:text-gray-900">
              FAQ
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300"
            >
              お問い合わせ
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              <Menu />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
              サービス
            </Link>
            <Link href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
              制作実績
            </Link>
            <Link href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
              料金
            </Link>
            <Link href="#faq" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
              FAQ
            </Link>
            <Link href="#contact" className="block px-3 py-2 bg-blue-900 text-white rounded">
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}


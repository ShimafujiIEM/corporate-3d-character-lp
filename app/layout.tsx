import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "3Dコーポレートキャラクター制作 ｜ エクスアールジョン株式会社",
  description: "あなたのブランドを3Dキャラクターで表現。最短1ヶ月で納品！",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


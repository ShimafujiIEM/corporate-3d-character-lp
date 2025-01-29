import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">今すぐ、あなたの3Dキャラクターを制作しませんか？</h2>
        <p className="text-xl text-gray-600 mb-8">ブランドの個性を際立たせる、魅力的な3Dキャラクターをお作りします。</p>
        <Button className="bg-blue-900 text-white px-8 py-8 text-lg rounded-lg hover:bg-blue-800 transition-colors duration-300">
          今すぐ依頼する
        </Button>
      </div>
    </section>
  )
}


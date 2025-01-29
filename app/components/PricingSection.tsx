import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "ベーシック",
    price: "100,000",
    features: ["低解像度モデル", "シンプルなポーズ1種", "修正1回まで"],
  },
  {
    name: "スタンダード",
    price: "300,000",
    features: ["中解像度モデル", "アニメーション対応", "修正2回まで", "テクスチャ込み"],
  },
  {
    name: "プレミアム",
    price: "500,000",
    features: ["高解像度モデル", "複数ポーズ・表情", "修正回数無制限", "フルアニメーション対応"],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">料金 & カスタマイズ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-gray-900 text-center">{plan.name}</h3>
                <p className="mt-4 text-center">
                  <span className="text-4xl font-extrabold text-gray-900">¥{plan.price}</span>
                  <span className="text-base font-medium text-gray-500">/キャラクター</span>
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-8 bg-gray-50">
                <Button className="w-full bg-blue-900 text-white hover:bg-blue-800">選択する</Button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-gray-600">
          ※ 状況により納期が変動する場合があります。詳細はお問い合わせください。
        </p>
      </div>
    </section>
  )
}


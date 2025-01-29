import { FileImage, Pencil, Package } from "lucide-react"

const steps = [
  {
    title: "イメージ送信",
    description: "オンラインで参考画像や要望を送信",
    icon: FileImage,
  },
  {
    title: "ラフ提案",
    description: "2週間以内にラフデザインを提示し、確認",
    icon: Pencil,
  },
  {
    title: "最終納品",
    description: "高品質3Dデータを最短1ヶ月で納品（※状況により納期変動あり）",
    icon: Package,
  },
]

export default function ProcessSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">制作フロー</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <step.icon className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


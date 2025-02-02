import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { cardData } from "@/lib/card"

function CardsSection() {
  return (
    <div className=" w-full flex flex-wrap xl:flex-nowrap gap-8 px-8 pt-8">
    {cardData.map(card=>
        <Card key={card.title} className="flex-1 text-center min-w-[250px]">
        <CardHeader>
          <CardTitle className="text-[#30374F] text-[16px]">{card.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#30374F] text-sm">{card.Content}</p>
        </CardContent>
       </Card>
    )}
    </div>
  )
}

export default CardsSection
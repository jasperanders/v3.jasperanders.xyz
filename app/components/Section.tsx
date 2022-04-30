import Card, { CardProps } from "~/components/Card"


export default function Section({ cards, title }: { title: string, cards: Array<CardProps> }) {
  return (<div className="break-inside-avoid pb-5 max-w-3xl mx-auto">
    <h1 className="text-2xl font-semibold mb-8">{title}</h1>
    <div className="flex items-center flex-col gap-10" >
      {cards.map((card) => (<Card key={card.title} {...card} />))}
    </div>
  </div>)
}
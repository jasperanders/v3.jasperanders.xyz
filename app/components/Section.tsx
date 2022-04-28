import Card, { CardProps } from "~/components/Card"


export default function Section({ cards, title }: { title: string, cards: Array<CardProps> }) {
  return (<div className="break-inside-avoid">
    <h1 className="text-2xl font-semibold">{title}</h1>
    <div className="flex flex-col gap-10" >
      {cards.map((card) => (<Card key={card.title} {...card} />))}
    </div>
  </div>)
}
import Card, { CardProps } from "~/components/Card"


export default function Section({ cards, title, twoCols = false }: { title: string, cards: Array<CardProps>, twoCols?: boolean }) {
  return (
    <div className={""}>
      <h2 className="text-3xl text-slate-700 font-bold italic mb-8">{title}</h2>
      <div className="grid grid-cols-1 gap-5" >
        {cards.map((card) => (<Card key={card.title} {...card} />))}
      </div>
    </div>
  )
}
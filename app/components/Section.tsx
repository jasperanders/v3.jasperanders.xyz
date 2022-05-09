import Card, { CardProps } from "~/components/Card"


export default function Section({ cards, title, twoCols = false }: { title: string, cards: Array<CardProps>, twoCols?: boolean }) {
  return (
  <div className={`break-inside-avoid pb-5  cols mx-auto`}>
    <h2 className="text-3xl text-slate-700 font-bold italic mb-8">{title}</h2>
    <div className={`${twoCols ? "container columns-1 gap-10 lg:columns-2 space-y-5" : "flex items-stretch flex-col gap-5"}`} >
      {cards.map((card) => (<Card key={card.title} {...card} />))}
    </div>
  </div>
  )
}
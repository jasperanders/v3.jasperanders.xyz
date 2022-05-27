import { ReactElement } from "react"
import Card, { CardProps } from "~/components/Card"


export default function Section({ cards, title, preface, twoCols = false }: { title: string, cards: Array<CardProps>, preface?: ReactElement, twoCols?: boolean }) {
  return (
    <div className={""}>
      <h2 className="text-3xl text-slate-700 font-bold italic mb-8">{title}</h2>
      {preface}
      <div className="grid grid-cols-1 gap-5" >
        {cards.map((card) => (<Card key={card.title} {...card} />))}
      </div>
    </div>
  )
}
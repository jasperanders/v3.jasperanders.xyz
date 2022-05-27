import { useState } from "react"
import AngleDown from "public/icons/angle-down-solid.svg"


export interface CardProps {
  title: string
  topRight: any
  subtitlePrefix?: string
  subtitle: string
  subtitleUrl?: string
  tags: Array<string>
  details: any,
  img?: string
}

export default function Card({ title, topRight, subtitlePrefix, subtitle, subtitleUrl, tags, details, img }: CardProps) {

  const [showDetails, setShowDetails] = useState(false)


  return (
    <button aria-label="show more" className="max-w-2xl text-left group border rounded-3xl hover:shadow-xl container bg-white p-5 px-7 pr-10 shadow-lg flex flex-col gap-5" onClick={() => setShowDetails(!showDetails)}>
      <div className="flex gap-5">
        {img && <img alt={title} width={"96px"} height={"96px"} className="self-center hidden sm:block aspect-square w-24 h-24 translate-y-5" src={img} />}
        <div className="flex flex-col gap-5 items-start break-inside-avoid grow">
          <p className="text-slate-500">{topRight}</p>
          <h3 className="text-xl">{title}</h3>
          <span className="text-lg">{subtitlePrefix && `${subtitlePrefix} `}
            {subtitleUrl ? <a className="text-lg decoration-3 underline" target="_blank" href={subtitleUrl}>{subtitle}</a> : <span className="text-lg">{subtitle}</span>}
          </span>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (<span key={tag} className="bg-rose-200 whitespace-nowrap p-1 px-2 rounded-lg break-after-auto">{tag}</span>))}
          </div>
        </div>
      </div>
      <div className={`${!showDetails ? "hidden" : "visible"} max-w-fit shrink-0 grow-0 w-fit`} >
        <hr className="mb-5" />
        {details()}
      </div>
      <img alt="ArrowDown" width={"24px"} height={"24px"} className={`mx-auto h-6 w-6 ${showDetails ? "transition rotate-180 slow ease-in-out" : "transition rotate-0 ease-in-out"}`} src={AngleDown}></img>
    </button>
  )
}


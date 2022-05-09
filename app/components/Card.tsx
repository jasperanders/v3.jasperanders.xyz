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
    <div className="pb-5">
      <div className="group hover:bg-gradient-to-tr	break-inside-avoid hover:from-white hover:to-indigo-50 border rounded-3xl container border-3 p-5 shadow-lg flex flex-col gap-5">
        <div className="flex gap-5">
          {img && <img className="self-center hidden sm:block aspect-square w-24 translate-y-5" src={img} />}
          <div className="flex flex-col gap-5 break-inside-avoid grow">
            <p className="text-slate-500">{topRight}</p>
            <h3 className="text-xl font-bold">{title}</h3>
            <span className="text-lg">{subtitlePrefix && `${subtitlePrefix} `}
              {subtitleUrl ? <a className="text-lg underline-offset-2 decoration-3 underline decoration-amber-300 hover:decoration-amber-200" target="_blank" href={subtitleUrl}>{subtitle}</a> : <span className="text-lg">{subtitle}</span>}
            </span>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (<span key={tag} className="bg-indigo-200 whitespace-nowrap p-1 px-2 rounded-lg break-after-auto">{tag}</span>))}
            </div>
          </div>
        </div>
        {showDetails &&
          <>
            <hr />
            {details()}
          </>
        }
        <button className="w-full" onClick={() => setShowDetails(!showDetails)}>
          <img className={`mx-auto h-6 ${showDetails ? "transition rotate-180 slow ease-in-out" : "transition rotate-0 ease-in-out"}`} src={AngleDown}></img>
        </button>
      </div>
    </div>
  )
}


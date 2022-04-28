import { useState } from "react"
import AngleDown from "public/icons/angle-down-solid.svg"


export interface CardProps {
  title: string
  topRight: string
  subtitlePrefix: string
  subtitle: string
  subtitleUrl?: string
  tags: Array<string>
  details: any,
}

export default function Card({ title, topRight, subtitlePrefix, subtitle, subtitleUrl, tags, details }: CardProps) {

  const [showDetails, setShowDetails] = useState(false)


  return (
    <>
      <div className="group hover:bg-indigo-50 border rounded-3xl container max-w-3xl border-3 p-5 shadow-lg flex flex-col gap-5 break-inside-avoid">
        <p className="text-right">{topRight}</p>
        <h3 className="text-xl">{title}</h3>
        <span className="text-lg">{`${subtitlePrefix} `}
          {subtitle ? <a className="text-lg underline-offset-0 decoration-4 underline decoration-amber-300 hover:decoration-amber-200" target="_blank" href={subtitleUrl}>{subtitle}</a> : <span className="text-lg">{subtitle}</span>}
        </span>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (<span key={tag} className="bg-indigo-200 whitespace-nowrap p-1 px-2 rounded-lg break-after-auto">{tag}</span>))}
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
    </>
  )
}


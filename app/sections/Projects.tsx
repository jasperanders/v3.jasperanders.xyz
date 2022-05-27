import * as OForest from '~/content/projects/oForest.md'
import * as SustainXweb from '~/content/projects/sustainXweb.md'
import * as Edmond from '~/content/projects/Edmond.md'
import { CardProps } from '~/components/Card'
import Section from '~/components/Section'

interface project {
  title: string
  when: string
  type: string
  img?: string
  tags: Array<string>
  details: any
}


const projects: Array<project> = [
  { ...Edmond.attributes, details: Edmond.default },
  {
    ...OForest.attributes,
    details: OForest.default
  },
  { ...SustainXweb.attributes, details: SustainXweb.default },
]

const cardProps: Array<CardProps> = []

projects.map(project => cardProps.push(
  {
    details: project.details,
    subtitle: project.type,
    tags: project.tags,
    title: project.title,
    img: project.img && project.img,
    topRight: project.when,
  }
))

const Preface = (<p>Hello</p>)

export function Projects() {
  return (
    <Section
      title='Projects'
      cards={cardProps}
      // preface={Preface}
      twoCols={false} />
  )
}
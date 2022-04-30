
import { CardProps } from "~/components/Card"
import Section from "~/components/Section"

import * as Ambient from '~/content/experience/ambient.en.md'
import * as dbAnalytics from '~/content/experience/dbAnalytics.en.md'
import * as tech4germany from '~/content/experience/tech4germany.en.md'

interface experience {
  title: string
  duration: string
  org: string
  orgUrl: string
  tags: Array<string>
  details: string
}

const experiences: Array<experience> = [
  {
    ...tech4germany.attributes,
    details: tech4germany.default
  }, {
    ...Ambient.attributes,
    details: Ambient.default
  }, {
    ...dbAnalytics.attributes,
    details: dbAnalytics.default
  }]

const cardProps: Array<CardProps> = []

experiences.map(experience => cardProps.push({
  title: experience.title,
  topRight: experience.duration,
  subtitlePrefix: "at",
  subtitle: experience.org,
  subtitleUrl: experience.orgUrl,
  tags: experience.tags,
  details: experience.details,
}))

export default function Experience() {
  return (<Section title="Experience" cards={cardProps} />)
}
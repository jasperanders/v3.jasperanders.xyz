import { CardProps } from "~/components/Card"
import Section from "~/components/Section"

import * as Ambient from '~/content/experience/ambient.en.md'
import * as dbAnalytics from '~/content/experience/dbAnalytics.en.md'
import * as tech4germany from '~/content/experience/tech4germany.en.md'

const experiences: Array<CardProps> = [
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

const cardProps: Array<CardProps | undefined>

experiences.map(experience => cardProps.push({
  title: experience.title,
  topRight: experience,
  subtitlePrefix: experience,
  subtitle: experience,
  subtitleUrl: experience,
  tags: experience,
  details: experience,
}))

export default function Experience() {
  return (<Section title="Experience" cards={experiences} />)
}
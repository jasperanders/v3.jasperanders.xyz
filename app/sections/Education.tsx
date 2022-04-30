import { CardProps } from "~/components/Card"
import Section from "~/components/Section"

import * as Bachelor from '~/content/education/bachelor.en.md'
import * as Master from '~/content/education/master.en.md'

interface education {
  title: string
  duration: string
  org: string
  orgUrl: string
  tags: Array<string>
  details: string
}

const education: Array<education> = [{
  ...Master.attributes,
  details: Master.default
}, {
  ...Bachelor.attributes,
  details: Bachelor.default
}]


const cardProps: Array<CardProps> = []

education.map(education => cardProps.push({
  title: education.title,
  topRight: education.duration,
  subtitlePrefix: "at",
  subtitle: education.org,
  subtitleUrl: education.orgUrl,
  tags: education.tags,
  details: education.details,
}))

export default function Education() {
  return (
    <div className="mt-10">
      <Section title="Education" cards={cardProps} />
    </div>
  )
}
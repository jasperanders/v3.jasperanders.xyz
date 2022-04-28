import { CardProps } from "~/components/Card"
import Section from "~/components/Section"

import * as Bachelor from '~/content/education/bachelor.en.md'
import * as Master from '~/content/education/master.en.md'

const education: Array<CardProps> = [{
  ...Master.attributes,
  details: Master.default
}, {
  ...Bachelor.attributes,
  details: Bachelor.default
}]

export default function Education() {
  return (
    <div className="mt-10">
      <Section title="Education" cards={education} />
    </div>
  )
}
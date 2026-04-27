import {
  Timeline,
  TimelineItem,
  TimelinePoint,
  TimelineContent,
  TimelineTime,
  TimelineTitle,
  TimelineBody,
} from "flowbite-react"
import { HiOutlineAcademicCap, HiOutlineCheckCircle } from "react-icons/hi"
import { education } from "../data"

export default function Education() {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
        Education
      </h2>

      <Timeline>
        <TimelineItem>
          <TimelinePoint icon={HiOutlineAcademicCap} />
          <TimelineContent>
            <TimelineTime>{education.period}</TimelineTime>
            <TimelineTitle>{education.degree}</TimelineTitle>
            <TimelineBody>
              <p className="mb-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {education.institution}
              </p>
              <ul className="space-y-2">
                {education.details.map((d, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  )
}

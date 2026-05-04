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
import SectionTitle from "./ui/SectionTitle"
import GlassCard from "./ui/GlassCard"
import { education } from "../data"

export default function Education() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <SectionTitle>Education</SectionTitle>

      <GlassCard>
        <Timeline>
          <TimelineItem>
            <TimelinePoint icon={HiOutlineAcademicCap} />
            <TimelineContent>
              <TimelineTime className="text-gray-700 dark:text-gray-400">
                {education.period}
              </TimelineTime>
              <TimelineTitle className="text-gray-950 dark:text-white">
                {education.degree}
              </TimelineTitle>
              <TimelineBody>
                <p className="mb-3 text-sm font-semibold text-indigo-800 dark:text-indigo-300">
                  {education.institution}
                </p>
                <ul className="space-y-2">
                  {education.details.map((d, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-900 dark:text-gray-100">
                      <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-700 dark:text-green-400" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </GlassCard>
    </section>
  )
}

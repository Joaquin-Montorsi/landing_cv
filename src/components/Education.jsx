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
    <section className="mx-auto w-full max-w-4xl px-6 py-16">
      <SectionTitle>Education</SectionTitle>

      <GlassCard>
        <Timeline>
          {education.map((entry) => (
            <TimelineItem key={entry.institution}>
              <TimelinePoint icon={HiOutlineAcademicCap} />
              <TimelineContent>
                {entry.period && (
                  <TimelineTime className="text-gray-700 dark:text-gray-400">
                    {entry.period}
                  </TimelineTime>
                )}
                <TimelineTitle className="text-gray-950 dark:text-white">
                  {entry.degree}
                </TimelineTitle>
                <TimelineBody>
                  <p className="mb-3 text-sm font-semibold text-indigo-800 dark:text-indigo-300">
                    {entry.institution}
                  </p>
                  <ul className="space-y-2">
                    {entry.details.map((d, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-900 dark:text-gray-100">
                        <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-700 dark:text-green-400" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </GlassCard>
    </section>
  )
}

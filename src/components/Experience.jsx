import {
  Timeline,
  TimelineItem,
  TimelinePoint,
  TimelineContent,
  TimelineTime,
  TimelineTitle,
  TimelineBody,
} from "flowbite-react"
import { HiOutlineBriefcase, HiOutlineCheckCircle } from "react-icons/hi"
import SectionTitle from "./ui/SectionTitle"
import GlassCard from "./ui/GlassCard"
import { experience } from "../data"

export default function Experience() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16">
      <SectionTitle>Work Experience</SectionTitle>

      <GlassCard>
        <Timeline>
          {experience.map((job) => (
            <TimelineItem key={job.company}>
              <TimelinePoint icon={HiOutlineBriefcase} />
              <TimelineContent>
                <TimelineTime className="text-gray-700 dark:text-gray-400">
                  {job.period}
                </TimelineTime>
                <TimelineTitle className="text-gray-950 dark:text-white">
                  {job.role}
                </TimelineTitle>
                <TimelineBody>
                  <p className="mb-3 text-sm font-semibold text-indigo-800 dark:text-indigo-300">
                    {job.company}
                  </p>
                  {job.technicalChallenge && (
                    <p className="mb-4 border-l-2 border-indigo-500 pl-3 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                      <span className="font-semibold text-gray-950 dark:text-white">
                        Technical challenge:{" "}
                      </span>
                      {job.technicalChallenge}
                    </p>
                  )}
                  <ul className="space-y-2">
                    {job.achievements.map((a, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-900 dark:text-gray-100">
                        <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-700 dark:text-green-400" />
                        <span>{a}</span>
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

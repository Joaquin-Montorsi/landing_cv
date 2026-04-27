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
import { experience } from "../data"

export default function Experience() {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
        Work Experience
      </h2>

      <Timeline>
        {experience.map((job) => (
          <TimelineItem key={job.company}>
            <TimelinePoint icon={HiOutlineBriefcase} />
            <TimelineContent>
              <TimelineTime>{job.period}</TimelineTime>
              <TimelineTitle>{job.role}</TimelineTitle>
              <TimelineBody>
                <p className="mb-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {job.company}
                </p>
                <ul className="space-y-2">
                  {job.achievements.map((a, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  )
}

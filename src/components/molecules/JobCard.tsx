import { Job } from '@/types/job'
import { Button } from '../atoms/Button'
import Link from 'next/link'

interface JobCardProps {
  job: Job
  onApply: (jobId: string) => void
}

export const JobCard = ({ job, onApply }: JobCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-card hover:shadow-lg transition-shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-text-primary">
            <Link href={`/jobs/${job.id}`} className="hover:text-primary">
              {job.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-text-secondary">
            {job.company} • {job.location}
          </p>
        </div>
        {job.salary && (
          <span className="text-lg font-semibold text-text-primary">
            {job.salary}
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-primary">
          {job.employmentType}
        </span>
        {job.tags?.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-50 text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-text-secondary line-clamp-2">
        {job.description}
      </p>

      <div className="mt-6 flex justify-end space-x-4">
        <Button
          variant="outline"
          as={Link}
          href={`/jobs/${job.id}`}
        >
          Подробнее
        </Button>
        <Button
          variant="primary"
          onClick={() => onApply(job.id)}
        >
          Откликнуться
        </Button>
      </div>
    </article>
  )
}
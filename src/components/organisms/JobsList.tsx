import { Job } from '@/types/job'
import { JobCard } from '../molecules/JobCard'
import { Pagination } from '../molecules/Pagination'

interface JobsListProps {
  jobs: Job[]
  total: number
  currentPage: number
  pageSize: number
  onPageChange: (page: number) => void
  onApply: (jobId: string) => void
}

export const JobsList = ({
  jobs,
  total,
  currentPage,
  pageSize,
  onPageChange,
  onApply,
}: JobsListProps) => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onApply={onApply}
          />
        ))}
      </div>
      
      <Pagination
        currentPage={currentPage}
        totalItems={total}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </div>
  )
}
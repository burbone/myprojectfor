import { Card } from '../atoms/Card'
import { Typography } from '../atoms/Typography'
import { Badge } from '../atoms/Badge'
import { Button } from '../atoms/Button'
import { Job } from '@/types/job'

interface JobCardProps {
  job: Job
  onApply: (jobId: string) => void
}

export const JobCard = ({ job, onApply }: JobCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <Typography variant="h3" className="mb-2">
            {job.title}
          </Typography>
          <Typography variant="p" className="mb-4">
            {job.company}
          </Typography>
        </div>
        <Badge variant={job.type === 'full-time' ? 'primary' : 'secondary'}>
          {job.type}
        </Badge>
      </div>
      
      <div className="flex gap-2 mb-4">
        <Badge variant="success" size="sm">
          {job.salary}
        </Badge>
        <Badge variant="warning" size="sm">
          {job.location}
        </Badge>
      </div>

      <Typography variant="p" className="mb-4 line-clamp-2">
        {job.description}
      </Typography>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {job.skills.map((skill) => (
            <Badge key={skill} variant="secondary" size="sm">
              {skill}
            </Badge>
          ))}
        </div>
        <Button onClick={() => onApply(job.id)}>
          Откликнуться
        </Button>
      </div>
    </Card>
  )
}
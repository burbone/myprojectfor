'use client'

import { useState } from 'react'
import { JobCard } from '../molecules/JobCard'
import { SearchInput } from '../molecules/SearchInput'
import { Pagination } from '../molecules/Pagination'
import { Typography } from '../atoms/Typography'
import { Job } from '@/types/job'
import { useJobs } from '@/hooks/useJobs'

export const JobsList = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const { jobs, loading, error, applyToJob } = useJobs()

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const jobsPerPage = 10
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Typography variant="p">Загрузка...</Typography>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Typography variant="p" className="text-red-600">
          {error}
        </Typography>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <SearchInput
        onSearch={setSearchQuery}
        placeholder="Поиск вакансий..."
      />

      {paginatedJobs.length === 0 ? (
        <div className="text-center py-12">
          <Typography variant="h3" className="mb-2">
            Вакансии не найдены
          </Typography>
          <Typography variant="p" className="text-text-secondary">
            Попробуйте изменить параметры поиска
          </Typography>
        </div>
      ) : (
        <div className="grid gap-6">
          {paginatedJobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              onApply={applyToJob}
            />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  )
}
import { Metadata } from 'next'
import { JobsList } from '@/components/organisms/JobsList'
import { JobsFilters } from '@/components/organisms/JobsFilters'
import { jobsApi } from '@/services/api'

export const metadata: Metadata = {
  title: 'Вакансии и стажировки | YourCodeReview',
  description: 'Найдите подходящую вакансию или стажировку в IT-сфере. Фильтруйте по типу занятости, локации и другим параметрам.',
  openGraph: {
    title: 'Вакансии и стажировки | YourCodeReview',
    description: 'Найдите подходящую вакансию или стажировку в IT-сфере',
    type: 'website',
  },
}

interface JobsPageProps {
  searchParams: {
    page?: string
    employmentType?: string
    location?: string
    search?: string
  }
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const page = Number(searchParams.page) || 1
  const size = 10

  const { items: jobs, total } = await jobsApi.getJobs({
    page,
    size,
    employmentType: searchParams.employmentType,
    location: searchParams.location,
    search: searchParams.search,
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <JobsFilters />
        </aside>

        <main className="flex-1">
          <JobsList
            jobs={jobs}
            total={total}
            currentPage={page}
            pageSize={size}
            onPageChange={(page) => {
              // Обработка изменения страницы
            }}
            onApply={(jobId) => {
              // Обработка отклика на вакансию
            }}
          />
        </main>
      </div>
    </div>
  )
}
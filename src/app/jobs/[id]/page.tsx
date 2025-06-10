import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Button } from '@/components/atoms/Button'
import { jobsApi } from '@/services/api'
import { generateSeo } from '@/utils/seo'
import { Job } from '@/types/job'

interface JobPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  try {
    const { data: job } = await jobsApi.getJob(params.id)
    return generateSeo({
      title: `${job.title} в ${job.company}`,
      description: job.description,
    })
  } catch {
    return {
      title: 'Вакансия не найдена',
      description: 'Запрашиваемая вакансия не найдена',
    }
  }
}

export default async function JobPage({ params }: JobPageProps) {
  try {
    const { data: job } = await jobsApi.getJob(params.id)

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-text-primary">
                {job.title}
              </h1>
              <p className="mt-2 text-xl text-text-secondary">
                {job.company} • {job.location}
              </p>
            </div>
            {job.salary && (
              <span className="text-2xl font-semibold text-text-primary">
                {job.salary}
              </span>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-primary">
              {job.employmentType}
            </span>
            {job.tags?.map((tag: string) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-50 text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: job.description }} />
          </div>

          <div className="mt-8 flex justify-end">
            <Button
              variant="primary"
              size="lg"
              as="a"
              href={job.applyUrl}
            >
              Откликнуться
            </Button>
          </div>
        </div>

        {/* Похожие вакансии */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Похожие вакансии
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Здесь будет список похожих вакансий */}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
}
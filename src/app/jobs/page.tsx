import dynamic from 'next/dynamic'
import { generateSeo } from '@/utils/seo'

const JobsPageContent = dynamic(() => import('@/components/organisms/JobsPageContent'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center min-h-[400px]">
      <p>Загрузка...</p>
    </div>
  )
})

export const metadata = generateSeo({
  title: 'Вакансии',
  description: 'Найдите работу мечты в IT среди актуальных вакансий',
  keywords: ['IT вакансии', 'работа программистом', 'IT карьера']
})

export default function JobsPage() {
  return <JobsPageContent />
}
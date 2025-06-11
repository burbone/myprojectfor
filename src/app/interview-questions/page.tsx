import { Metadata } from 'next'
import { generateSeo } from '@/utils/seo'
import { QuestionsFilters } from '@/components/organisms/QuestionsFilters'
import { QuestionsList } from '@/components/organisms/QuestionsList'

export const metadata: Metadata = generateSeo({
  title: 'Вопросы для собеседований',
  description: 'Подборка вопросов для подготовки к техническим собеседованиям',
  keywords: ['собеседование', 'вопросы', 'подготовка', 'it'],
})

export default function QuestionsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-text-primary mb-8 text-center">
        Вопросы для собеседований
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <QuestionsFilters />
        </aside>
        <section className="md:col-span-3">
          <QuestionsList />
        </section>
      </div>
    </div>
  )
}
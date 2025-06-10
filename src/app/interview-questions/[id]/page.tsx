import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Button } from '@/components/atoms/Button'
import { questionsApi } from '@/services/api'
import { generateSeo } from '@/utils/seo'
import { Question } from '@/types/question'

interface QuestionPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: QuestionPageProps): Promise<Metadata> {
  try {
    const { data: question } = await questionsApi.getQuestion(params.id)
    return generateSeo({
      title: question.title,
      description: question.preview,
    })
  } catch {
    return {
      title: 'Вопрос не найден',
      description: 'Запрашиваемый вопрос не найден',
    }
  }
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  try {
    const { data: question } = await questionsApi.getQuestion(params.id)

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-text-primary">
                {question.title}
              </h1>
              <p className="mt-2 text-xl text-text-secondary">
                {question.category}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {question.tags.map((tag: string) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: question.content }} />
          </div>

          <div className="mt-8 flex justify-between">
            <Button
              variant="outline"
              as="a"
              href="/interview-questions/testing"
            >
              Попробовать в тренажере
            </Button>
            <Button
              variant="primary"
              as="a"
              href={`/interview-questions/${question.nextQuestionId}`}
            >
              Следующий вопрос
            </Button>
          </div>
        </div>

        {/* Похожие вопросы */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Похожие вопросы
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Здесь будет список похожих вопросов */}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
}
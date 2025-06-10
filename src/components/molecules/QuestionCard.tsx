import { Question } from '@/types/question'
import { Button } from '../atoms/Button'
import Link from 'next/link'

interface QuestionCardProps {
  question: Question
}

export const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-card hover:shadow-lg transition-shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-text-primary">
            <Link href={`/interview-questions/${question.id}`} className="hover:text-primary">
              {question.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-text-secondary">
            {question.category}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {question.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-text-secondary line-clamp-2">
        {question.preview}
      </p>

      <div className="mt-6 flex justify-end">
        <Button
          variant="primary"
          as={Link}
          href={`/interview-questions/${question.id}`}
        >
          Читать ответ
        </Button>
      </div>
    </article>
  )
}
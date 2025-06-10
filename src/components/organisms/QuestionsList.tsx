import { Question } from '@/types/question'
import { QuestionCard } from '../molecules/QuestionCard'
import { Pagination } from '../molecules/Pagination'

interface QuestionsListProps {
  questions: Question[]
  total: number
  currentPage: number
  pageSize: number
  onPageChange: (page: number) => void
}

export const QuestionsList = ({
  questions,
  total,
  currentPage,
  pageSize,
  onPageChange,
}: QuestionsListProps) => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
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
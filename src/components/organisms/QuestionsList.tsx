import { useState } from 'react'
import { Card } from '../atoms/Card'
import { Typography } from '../atoms/Typography'
import { Badge } from '../atoms/Badge'
import { Button } from '../atoms/Button'
import { SearchInput } from '../molecules/SearchInput'
import { Pagination } from '../molecules/Pagination'
import { Question } from '@/types/question'
import { useQuestions } from '@/hooks/useQuestions'

export const QuestionsList = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const { questions, loading, error, startTraining } = useQuestions()

  const filteredQuestions = questions.filter(question =>
    question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    question.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const questionsPerPage = 10
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage)
  const paginatedQuestions = filteredQuestions.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage
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
        placeholder="Поиск вопросов..."
      />

      {paginatedQuestions.length === 0 ? (
        <div className="text-center py-12">
          <Typography variant="h3" className="mb-2">
            Вопросы не найдены
          </Typography>
          <Typography variant="p" className="text-text-secondary">
            Попробуйте изменить параметры поиска
          </Typography>
        </div>
      ) : (
        <div className="grid gap-6">
          {paginatedQuestions.map(question => (
            <Card key={question.id}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <Typography variant="h3" className="mb-2">
                    {question.title}
                  </Typography>
                  <Typography variant="p" className="text-text-secondary">
                    {question.description}
                  </Typography>
                </div>
                <Badge variant={question.difficulty === 'easy' ? 'success' : question.difficulty === 'medium' ? 'warning' : 'danger'}>
                  {question.difficulty}
                </Badge>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {question.tags.map(tag => (
                    <Badge key={tag} variant="secondary" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button onClick={() => startTraining(question.id)}>
                  Начать тренировку
                </Button>
              </div>
            </Card>
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
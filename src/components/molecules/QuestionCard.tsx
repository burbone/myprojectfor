import { Card } from '../atoms/Card'
import { Typography } from '../atoms/Typography'
import { Badge } from '../atoms/Badge'
import { Button } from '../atoms/Button'
import { Question } from '@/types/question'

interface QuestionCardProps {
  question: Question
  onStartTraining: (questionId: string) => void
}

export const QuestionCard = ({ question, onStartTraining }: QuestionCardProps) => {
  return (
    <Card>
      <div className="flex justify-between items-start mb-4">
        <div>
          <Typography variant="h3" className="mb-2">
            {question.title}
          </Typography>
          <Typography variant="p" className="text-text-secondary">
            {question.description}
          </Typography>
        </div>
        <Badge 
          variant={
            question.difficulty === 'easy' 
              ? 'success' 
              : question.difficulty === 'medium' 
                ? 'warning' 
                : 'danger'
          }
        >
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
        <Button onClick={() => onStartTraining(question.id)}>
          Начать тренировку
        </Button>
      </div>
    </Card>
  )
}
export type QuestionDifficulty = 'easy' | 'medium' | 'hard'

export interface Question {
  id: string
  title: string
  description: string
  difficulty: QuestionDifficulty
  tags: string[]
  createdAt: string
  updatedAt: string
}
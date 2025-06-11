export interface Question {
  id: string
  title: string
  category: string
  preview: string
  content: string
  tags: string[]
  nextQuestionId?: string
  createdAt: string
  updatedAt: string
}

export interface QuestionsResponse {
  data: Question[]
  total: number
  page: number
  limit: number
}

export interface QuestionFilters {
  search?: string
  category?: string
  page?: number
  limit?: number
}
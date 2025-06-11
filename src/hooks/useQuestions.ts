'use client'

import { useState, useEffect } from 'react'
import { Question } from '@/types/question'
import { api } from '@/services/api'

export const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchQuestions()
  }, [])

  const fetchQuestions = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await api.get<Question[]>('/questions')
      setQuestions(response.data)
    } catch (err) {
      setError('Ошибка при загрузке вопросов')
    } finally {
      setLoading(false)
    }
  }

  const startTraining = async (questionId: string) => {
    try {
      setLoading(true)
      setError(null)
      await api.post(`/questions/${questionId}/start-training`)
      await fetchQuestions()
    } catch (err) {
      setError('Ошибка при начале тренировки')
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    questions,
    loading,
    error,
    startTraining,
    fetchQuestions
  }
}
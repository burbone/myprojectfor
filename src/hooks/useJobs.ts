'use client'

import { useState, useEffect } from 'react'
import { Job } from '@/types/job'
import { api } from '@/services/api'

export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await api.get<Job[]>('/jobs')
      setJobs(response.data)
    } catch (err) {
      setError('Ошибка при загрузке вакансий')
    } finally {
      setLoading(false)
    }
  }

  const applyToJob = async (jobId: string) => {
    try {
      setLoading(true)
      setError(null)
      await api.post(`/jobs/${jobId}/apply`)
      await fetchJobs()
    } catch (err) {
      setError('Ошибка при отклике на вакансию')
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    jobs,
    loading,
    error,
    applyToJob,
    fetchJobs
  }
}
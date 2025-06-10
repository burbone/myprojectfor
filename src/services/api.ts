import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { toast } from 'react-hot-toast'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://jobs.yourcodereview.com:8005'

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token')
        window.location.href = '/auth/login'
      }
    }

    const message = error.response?.data?.message || 'Произошла ошибка'
    toast.error(message)

    return Promise.reject(error)
  }
)

export const handleApiError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message || 'Произошла ошибка'
    toast.error(message)
  } else {
    toast.error('Произошла неизвестная ошибка')
  }
}

// API сервисы
export const jobsApi = {
  getJobs: () => api.get('/jobs'),
  getJob: (id: string) => api.get(`/jobs/${id}`),
  createJob: (data: any) => api.post('/jobs', data),
  updateJob: (id: string, data: any) => api.put(`/jobs/${id}`, data),
  deleteJob: (id: string) => api.delete(`/jobs/${id}`),
}

export const questionsApi = {
  getQuestions: () => api.get('/questions'),
  getQuestion: (id: string) => api.get(`/questions/${id}`),
  createQuestion: (data: any) => api.post('/questions', data),
  updateQuestion: (id: string, data: any) => api.put(`/questions/${id}`, data),
  deleteQuestion: (id: string) => api.delete(`/questions/${id}`),
}
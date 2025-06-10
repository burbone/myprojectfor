export type JobType = 'full-time' | 'part-time' | 'contract' | 'internship'

export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: JobType
  salary: string
  description: string
  requirements: string[]
  skills: string[]
  createdAt: string
  updatedAt: string
}
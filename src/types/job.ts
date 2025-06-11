export interface Job {
  id: string
  title: string
  company: string
  location: string
  description: string
  salary?: string
  employmentType: string
  tags?: string[]
  applyUrl: string
  createdAt: string
  updatedAt: string
}

export interface JobsResponse {
  data: Job[]
  total: number
  page: number
  limit: number
}

export interface JobFilters {
  search?: string
  location?: string
  employmentType?: string
  page?: number
  limit?: number
}
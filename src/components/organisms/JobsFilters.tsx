'use client';

import { Input } from '../atoms/Input'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

interface JobsFiltersProps {
  onFilterChange?: () => void;
}

const employmentTypes = [
  { value: 'full-time', label: 'Полная занятость' },
  { value: 'part-time', label: 'Частичная занятость' },
  { value: 'project', label: 'Проектная работа' },
  { value: 'internship', label: 'Стажировка' },
]

export function JobsFilters({ onFilterChange }: JobsFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    router.push(`/jobs?${createQueryString('search', value)}`)
    onFilterChange?.()
  }

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    router.push(`/jobs?${createQueryString('location', value)}`)
    onFilterChange?.()
  }

  const handleEmploymentTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    router.push(`/jobs?${createQueryString('employmentType', value)}`)
    onFilterChange?.()
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-card space-y-4">
      <Input
        label="Поиск по названию или компании"
        placeholder="Frontend Developer, Google..."
        value={searchParams.get('search') || ''}
        onChange={handleSearchChange}
      />
      <Input
        label="Местоположение"
        placeholder="Москва, удаленно..."
        value={searchParams.get('location') || ''}
        onChange={handleLocationChange}
      />
      <div>
        <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700 mb-1">
          Тип занятости
        </label>
        <select
          id="employmentType"
          name="employmentType"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
          value={searchParams.get('employmentType') || ''}
          onChange={handleEmploymentTypeChange}
        >
          <option value="">Все</option>
          {employmentTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
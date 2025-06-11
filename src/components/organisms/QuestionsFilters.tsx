'use client';

import { Input } from '../atoms/Input'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

const categories = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'devops', label: 'DevOps' },
  { value: 'database', label: 'Базы данных' },
]

export function QuestionsFilters() {
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
    router.push(`/interview-questions?${createQueryString('search', value)}`)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    router.push(`/interview-questions?${createQueryString('category', value)}`)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-card space-y-4">
      <Input
        label="Поиск по вопросу"
        placeholder="Введите текст вопроса..."
        value={searchParams.get('search') || ''}
        onChange={handleSearchChange}
      />
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Категория
        </label>
        <select
          id="category"
          name="category"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
          value={searchParams.get('category') || ''}
          onChange={handleCategoryChange}
        >
          <option value="">Все категории</option>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
import { Input } from '../atoms/Input'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

const employmentTypes = [
  { value: 'full-time', label: 'Полная занятость' },
  { value: 'part-time', label: 'Частичная занятость' },
  { value: 'remote', label: 'Удаленная работа' },
  { value: 'internship', label: 'Стажировка' },
]

const locations = [
  { value: 'moscow', label: 'Москва' },
  { value: 'spb', label: 'Санкт-Петербург' },
  { value: 'remote', label: 'Удаленно' },
  { value: 'other', label: 'Другое' },
]

export const JobsFilters = () => {
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

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Фильтры</h2>
      
      <div className="space-y-4">
        <Input
          label="Поиск"
          type="search"
          placeholder="Название вакансии или компании"
          value={searchParams.get('search') ?? ''}
          onChange={(e) => {
            router.push(`/jobs?${createQueryString('search', e.target.value)}`)
          }}
        />

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Тип занятости</h3>
          <div className="space-y-2">
            {employmentTypes.map((type) => (
              <label key={type.value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={searchParams.get('employmentType') === type.value}
                  onChange={(e) => {
                    router.push(`/jobs?${createQueryString('employmentType', e.target.checked ? type.value : '')}`)
                  }}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-600">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Локация</h3>
          <div className="space-y-2">
            {locations.map((location) => (
              <label key={location.value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={searchParams.get('location') === location.value}
                  onChange={(e) => {
                    router.push(`/jobs?${createQueryString('location', e.target.checked ? location.value : '')}`)
                  }}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-600">{location.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
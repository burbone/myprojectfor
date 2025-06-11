'use client';

import { JobsList } from './JobsList'
import { JobsFilters } from './JobsFilters'

export function JobsPageContent() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Вакансии</h1>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <JobsFilters onFilterChange={() => {}} />
        </div>
        <div className="md:col-span-3">
          <JobsList />
        </div>
      </div>
    </div>
  )
} 
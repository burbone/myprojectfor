 'use client'

import { useEffect } from 'react'
import { Typography } from '@/components/atoms/Typography'
import { Button } from '@/components/atoms/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <Typography variant="h1" className="mb-4">
        Что-то пошло не так
      </Typography>
      <Typography variant="p" className="mb-8 text-text-secondary">
        Произошла ошибка при загрузке страницы
      </Typography>
      <Button onClick={reset}>
        Попробовать снова
      </Button>
    </div>
  )
}
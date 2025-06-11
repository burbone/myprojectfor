import Link from 'next/link'
import { Typography } from '@/components/atoms/Typography'
import { Button } from '@/components/atoms/Button'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <Typography variant="h1" className="mb-4">
        404
      </Typography>
      <Typography variant="h2" className="mb-4">
        Страница не найдена
      </Typography>
      <Typography variant="p" className="mb-8 text-text-secondary">
        Извините, запрашиваемая страница не существует
      </Typography>
      <Link href="/">
        <Button>
          Вернуться на главную
        </Button>
      </Link>
    </div>
  )
}
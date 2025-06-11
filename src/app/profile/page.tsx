import { Card } from '@/components/atoms/Card'
import { Typography } from '@/components/atoms/Typography'
import { Button } from '@/components/atoms/Button'
import { ProtectedRoute } from '@/components/providers/ProtectedRoute'
import { generateSeo } from '@/utils/seo'

export const metadata = generateSeo({
  title: 'Профиль',
  description: 'Управление вашим профилем',
  keywords: ['профиль', 'настройки', 'аккаунт']
})

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto">
        <Typography variant="h1" className="mb-8">
          Профиль
        </Typography>

        <Card className="p-6 space-y-6">
          <div>
            <Typography variant="h3" className="mb-4">
              Личная информация
            </Typography>
            <div className="space-y-4">
              <div>
                <Typography variant="p" className="text-text-secondary">
                  Имя
                </Typography>
                <Typography variant="p">
                  Иван Иванов
                </Typography>
              </div>
              <div>
                <Typography variant="p" className="text-text-secondary">
                  Email
                </Typography>
                <Typography variant="p">
                  ivan@example.com
                </Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Настройки
            </Typography>
            <div className="space-y-4">
              <Button variant="outline">
                Изменить пароль
              </Button>
              <Button variant="outline">
                Редактировать профиль
              </Button>
            </div>
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Активность
            </Typography>
            <div className="space-y-4">
              <div>
                <Typography variant="p" className="text-text-secondary">
                  Отклики на вакансии
                </Typography>
                <Typography variant="p">
                  5 откликов
                </Typography>
              </div>
              <div>
                <Typography variant="p" className="text-text-secondary">
                  Пройденные тренировки
                </Typography>
                <Typography variant="p">
                  12 тренировок
                </Typography>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </ProtectedRoute>
  )
}
import Link from 'next/link'
import { Card } from '@/components/atoms/Card'
import { Typography } from '@/components/atoms/Typography'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'
import { generateSeo } from '@/utils/seo'

export const metadata = generateSeo({
  title: 'Регистрация',
  description: 'Создайте новый аккаунт',
  keywords: ['регистрация', 'новый аккаунт', 'создать аккаунт']
})

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto">
      <Card className="p-8">
        <Typography variant="h2" className="mb-6 text-center">
          Создать аккаунт
        </Typography>

        <form className="space-y-6">
          <Input
            label="Имя"
            type="text"
            placeholder="Введите ваше имя"
            required
          />

          <Input
            label="Email"
            type="email"
            placeholder="Введите ваш email"
            required
          />

          <Input
            label="Пароль"
            type="password"
            placeholder="Создайте пароль"
            required
          />

          <Input
            label="Подтверждение пароля"
            type="password"
            placeholder="Повторите пароль"
            required
          />

          <Button fullWidth>
            Зарегистрироваться
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Typography variant="p" className="text-text-secondary">
            Уже есть аккаунт?{' '}
            <Link href="/auth/login" className="text-primary hover:text-primary-hover">
              Войти
            </Link>
          </Typography>
        </div>
      </Card>
    </div>
  )
}
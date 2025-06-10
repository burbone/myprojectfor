import Link from 'next/link'
import { Card } from '@/components/atoms/Card'
import { Typography } from '@/components/atoms/Typography'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'
import { generateSeo } from '@/utils/seo'

export const metadata = generateSeo({
  title: 'Вход',
  description: 'Войдите в свой аккаунт',
  keywords: ['вход', 'авторизация', 'аккаунт']
})

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto">
      <Card className="p-8">
        <Typography variant="h2" className="mb-6 text-center">
          Вход в аккаунт
        </Typography>

        <form className="space-y-6">
          <Input
            label="Email"
            type="email"
            placeholder="Введите ваш email"
            required
          />

          <Input
            label="Пароль"
            type="password"
            placeholder="Введите ваш пароль"
            required
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-text-secondary">
                Запомнить меня
              </label>
            </div>

            <div className="text-sm">
              <Link href="/auth/forgot-password" className="text-primary hover:text-primary-hover">
                Забыли пароль?
              </Link>
            </div>
          </div>

          <Button fullWidth>
            Войти
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Typography variant="p" className="text-text-secondary">
            Нет аккаунта?{' '}
            <Link href="/auth/register" className="text-primary hover:text-primary-hover">
              Зарегистрироваться
            </Link>
          </Typography>
        </div>
      </Card>
    </div>
  )
}
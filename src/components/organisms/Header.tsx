import Link from 'next/link'
import { Button } from '../atoms/Button'
import { useAuth } from '@/hooks/useAuth'

export const Header = () => {
  const { user, logout } = useAuth()

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              YourCodeReview
            </Link>
          </div>

          <nav className="flex items-center gap-4">
            <Link href="/jobs" className="text-text-secondary hover:text-text-primary">
              Вакансии
            </Link>
            <Link href="/questions" className="text-text-secondary hover:text-text-primary">
              Вопросы
            </Link>
            
            {user ? (
              <div className="flex items-center gap-4">
                <Link href="/profile" className="text-text-secondary hover:text-text-primary">
                  Профиль
                </Link>
                <Button variant="outline" onClick={logout}>
                  Выйти
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/auth/login">
                  <Button variant="outline">Войти</Button>
                </Link>
                <Link href="/auth/register">
                  <Button>Регистрация</Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
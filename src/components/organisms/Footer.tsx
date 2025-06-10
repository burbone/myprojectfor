import Link from 'next/link'
import { Typography } from '../atoms/Typography'

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Typography variant="h4" className="mb-4">
              YourCodeReview
            </Typography>
            <Typography variant="p" className="text-text-secondary">
              Ваш надежный партнер в поиске работы в IT
            </Typography>
          </div>

          <div>
            <Typography variant="h5" className="mb-4">
              Навигация
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs" className="text-text-secondary hover:text-text-primary">
                  Вакансии
                </Link>
              </li>
              <li>
                <Link href="/questions" className="text-text-secondary hover:text-text-primary">
                  Вопросы
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-secondary hover:text-text-primary">
                  О нас
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Typography variant="h5" className="mb-4">
              Поддержка
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-text-secondary hover:text-text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-text-primary">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Typography variant="h5" className="mb-4">
              Контакты
            </Typography>
            <ul className="space-y-2 text-text-secondary">
              <li>Email: support@yourcodereview.com</li>
              <li>Телефон: +7 (999) 123-45-67</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <Typography variant="p" className="text-center text-text-secondary">
            © {new Date().getFullYear()} YourCodeReview. Все права защищены.
          </Typography>
        </div>
      </div>
    </footer>
  )
}
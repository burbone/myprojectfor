import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/atoms/Button'

export const metadata: Metadata = {
  title: 'YourCodeReview - Вакансии и вопросы с собеседований',
  description: 'Найдите работу в IT и подготовьтесь к собеседованиям с помощью нашей платформы',
  openGraph: {
    title: 'YourCodeReview - Вакансии и вопросы с собеседований',
    description: 'Найдите работу в IT и подготовьтесь к собеседованиям',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero секция */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Найдите работу в IT</span>
              <span className="block text-primary">и подготовьтесь к собеседованиям</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Вакансии от ведущих компаний и база вопросов с собеседований для подготовки к карьере в IT
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button
                  variant="primary"
                  size="lg"
                  as={Link}
                  href="/jobs"
                >
                  Найти вакансию
                </Button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Button
                  variant="outline"
                  size="lg"
                  as={Link}
                  href="/interview-questions"
                >
                  Вопросы с собеседований
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с преимуществами */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Почему выбирают нас
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-lg font-medium text-gray-900">Актуальные вакансии</h3>
              <p className="mt-2 text-base text-gray-500">
                Свежие вакансии от проверенных компаний с полным описанием и условиями
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-lg font-medium text-gray-900">База вопросов</h3>
              <p className="mt-2 text-base text-gray-500">
                Большая база вопросов с собеседований и подробными ответами
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-lg font-medium text-gray-900">Тренажер вопросов</h3>
              <p className="mt-2 text-base text-gray-500">
                Практикуйтесь в решении задач и подготовьтесь к реальному собеседованию
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Готовы начать?
            </h2>
            <p className="mt-4 text-lg text-white">
              Зарегистрируйтесь и получите доступ ко всем возможностям платформы
            </p>
            <div className="mt-8">
              <Button
                variant="outline"
                size="lg"
                as={Link}
                href="/auth/register"
                className="bg-white text-primary hover:bg-gray-50"
              >
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
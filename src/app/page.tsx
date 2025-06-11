import { Typography } from '@/components/atoms/Typography'
import { Button } from '@/components/atoms/Button'
import Link from 'next/link'
import { generateSeo } from '@/utils/seo'

export const metadata = generateSeo({
  title: 'Главная',
  description: 'Найдите работу мечты в IT и подготовьтесь к собеседованиям с помощью нашей платформы',
  keywords: ['IT', 'работа', 'собеседование', 'карьера', 'программирование']
})

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero секция */}
      <section className="text-center py-20">
        <Typography variant="h1" className="mb-6">
          Ваш путь к успешной карьере в IT
        </Typography>
        <Typography variant="p" className="max-w-2xl mx-auto mb-8 text-lg">
          Найдите работу мечты и подготовьтесь к собеседованиям с помощью нашей платформы
        </Typography>
        <div className="flex justify-center gap-4">
          <Link href="/jobs">
            <Button size="lg">
              Найти работу
            </Button>
          </Link>
          <Link href="/interview-questions">
            <Button variant="outline" size="lg">
              Подготовиться к собеседованию
            </Button>
          </Link>
        </div>
      </section>

      {/* Преимущества */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <Typography variant="h3" className="mb-4">
            Актуальные вакансии
          </Typography>
          <Typography variant="p">
            Мы собираем вакансии из лучших IT-компаний и регулярно обновляем базу
          </Typography>
        </div>
        <div className="text-center p-6">
          <Typography variant="h3" className="mb-4">
            Подготовка к собеседованиям
          </Typography>
          <Typography variant="p">
            Тренируйтесь на реальных вопросах с собеседований и получайте обратную связь
          </Typography>
        </div>
        <div className="text-center p-6">
          <Typography variant="h3" className="mb-4">
            Сообщество
          </Typography>
          <Typography variant="p">
            Общайтесь с другими разработчиками, делитесь опытом и находите единомышленников
          </Typography>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="text-center py-16 bg-gray-50 rounded-lg">
        <Typography variant="h2" className="mb-4">
          Готовы начать?
        </Typography>
        <Typography variant="p" className="mb-8">
          Присоединяйтесь к нашему сообществу и начните свой путь к успешной карьере в IT
        </Typography>
        <Link href="/auth/register">
          <Button size="lg">
            Зарегистрироваться
          </Button>
        </Link>
      </section>
    </div>
  )
}
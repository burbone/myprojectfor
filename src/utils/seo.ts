import { Metadata } from 'next'

interface SeoProps {
  title: string
  description: string
  path: string
  image?: string
}

export const generateSeo = ({
  title,
  description,
  path,
  image = '/og-image.jpg',
}: SeoProps): Metadata => {
  const url = `https://yourcodereview.com${path}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'YourCodeReview',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'ru_RU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}
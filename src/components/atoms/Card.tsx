import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddingVariants = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
}

export const Card = ({
  children,
  className,
  padding = 'md',
  ...props
}: CardProps) => {
  const baseStyles = 'bg-white rounded-lg shadow-sm border border-gray-200'
  const classes = twMerge(baseStyles, paddingVariants[padding], className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
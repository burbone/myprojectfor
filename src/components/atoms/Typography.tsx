import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  children: ReactNode
  className?: string
}

const variants = {
  h1: 'text-4xl font-bold tracking-tight text-text-primary sm:text-5xl',
  h2: 'text-3xl font-bold tracking-tight text-text-primary sm:text-4xl',
  h3: 'text-2xl font-bold text-text-primary sm:text-3xl',
  h4: 'text-xl font-bold text-text-primary sm:text-2xl',
  h5: 'text-lg font-bold text-text-primary sm:text-xl',
  h6: 'text-base font-bold text-text-primary sm:text-lg',
  p: 'text-base text-text-secondary',
  span: 'text-base text-text-secondary'
}

export const Typography = ({
  variant,
  children,
  className,
  ...props
}: TypographyProps) => {
  const Component = variant
  const classes = twMerge(variants[variant], className)

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
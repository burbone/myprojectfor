import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
  size?: 'sm' | 'md'
}

const variants = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  success: 'bg-green-100 text-green-800',
  danger: 'bg-red-100 text-red-800',
  warning: 'bg-yellow-100 text-yellow-800'
}

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-0.5 text-sm'
}

export const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: BadgeProps) => {
  const baseStyles = 'inline-flex items-center rounded-full font-medium'
  const classes = twMerge(baseStyles, variants[variant], sizes[size], className)

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}
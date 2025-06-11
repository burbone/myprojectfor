import { InputHTMLAttributes, useState } from 'react'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'

interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onSearch: (value: string) => void
  placeholder?: string
  className?: string
}

export const SearchInput = ({
  onSearch,
  placeholder = 'Поиск...',
  className,
  ...props
}: SearchInputProps) => {
  const [value, setValue] = useState('')

  const handleSearch = () => {
    onSearch(value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="flex gap-2">
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className={className}
        {...props}
      />
      <Button onClick={handleSearch}>
        Поиск
      </Button>
    </div>
  )
}
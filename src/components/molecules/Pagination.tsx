import { Button } from '../atoms/Button'

interface PaginationProps {
  currentPage: number
  totalItems: number
  pageSize: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / pageSize)
  
  if (totalPages <= 1) return null

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="flex w-0 flex-1">
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Назад
        </Button>
      </div>
      
      <div className="hidden md:flex">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={page === currentPage ? 'primary' : 'outline'}
            onClick={() => onPageChange(page)}
            className="mx-1"
          >
            {page}
          </Button>
        ))}
      </div>
      
      <div className="flex w-0 flex-1 justify-end">
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Вперед
        </Button>
      </div>
    </nav>
  )
}
import { Button } from '../atoms/Button'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  
  const renderPageNumbers = () => {
    const visiblePages = pages.filter(page => {
      if (page === 1 || page === totalPages) return true
      if (page >= currentPage - 1 && page <= currentPage + 1) return true
      return false
    })

    return visiblePages.map((page, index) => {
      if (index > 0 && page - visiblePages[index - 1] > 1) {
        return (
          <span key={`ellipsis-${page}`} className="px-2">
            ...
          </span>
        )
      }

      return (
        <Button
          key={page}
          variant={currentPage === page ? 'primary' : 'outline'}
          size="sm"
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      )
    })
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Назад
      </Button>
      
      {renderPageNumbers()}
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Вперед
      </Button>
    </div>
  )
}
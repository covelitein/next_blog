import { format } from 'date-fns'

export function formatDate(date: any): string {
  return format(date, 'dd MMMM yyyy')
}
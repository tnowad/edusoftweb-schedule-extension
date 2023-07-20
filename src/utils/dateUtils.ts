function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function parseDate(dateString: string): Date | null {
  const dateParts = dateString.split('-').map(part => parseInt(part, 10))

  if (dateParts.length === 3) {
    const [year, month, day] = dateParts

    const isValidDate = !isNaN(year) && !isNaN(month) && !isNaN(day)

    if (isValidDate)
      return new Date(year, month - 1, day)
  }

  return null
}

export { formatDate, parseDate }

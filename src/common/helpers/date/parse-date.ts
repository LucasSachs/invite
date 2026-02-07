export function parseDate(dateString: string) {
  const validDateRegex = /^(\d{2})\/(\d{2})\/(\d{4}),\s*(\d{2}):(\d{2})$/
  const isValidDate = dateString.match(validDateRegex)

  if (!isValidDate) return null

  const day = parseInt(isValidDate[1], 10)
  const month = parseInt(isValidDate[2], 10)
  const year = parseInt(isValidDate[3], 10)
  const hour = parseInt(isValidDate[4], 10)
  const minute = parseInt(isValidDate[5], 10)

  if (month < 1 || month > 12) return null
  if (day < 1 || day > 31) return null
  if (hour < 0 || hour > 23) return null
  if (minute < 0 || minute > 59) return null

  const daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
  if (isLeapYear) daysInEachMonth[1] = 29 // If is a leap year, february have 29 days instead of 28

  if (day > daysInEachMonth[month - 1]) return null

  const parsedDate = new Date(year, month - 1, day, hour, minute)

  if (
    parsedDate.getDate() !== day
    || parsedDate.getMonth() !== month - 1
    || parsedDate.getFullYear() !== year
    || parsedDate.getHours() !== hour
    || parsedDate.getMinutes() !== minute
  ) {
    return null
  }

  return parsedDate
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function formatDateTime(dateTimeString?: string): {
  formattedDate: string
  formattedTime: string
} {
  if (!dateTimeString) {
    return { formattedDate: '', formattedTime: '' }
  }

  const optionsDate: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
  }

  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }

  const dateObject = new Date(dateTimeString)
  const formattedDate = dateObject.toLocaleDateString('en-US', optionsDate)
  const formattedTime = dateObject.toLocaleTimeString('en-US', optionsTime)

  return { formattedDate, formattedTime }
}

export function sortEventsByDate<T extends { dateAndTime?: string }>(
  a: T,
  b: T,
): number {
  const dateA = new Date(a.dateAndTime ?? '')
  const dateB = new Date(b.dateAndTime ?? '')

  if (isNaN(dateA.getTime())) return 1
  if (isNaN(dateB.getTime())) return -1

  const currentDate = new Date()
  const isEventAPassed = dateA < currentDate
  const isEventBPassed = dateB < currentDate

  if (isEventAPassed && isEventBPassed) {
    return dateB.getTime() - dateA.getTime()
  } else if (isEventAPassed && !isEventBPassed) {
    return 1
  } else if (!isEventAPassed && isEventBPassed) {
    return -1
  } else {
    return dateA.getTime() - dateB.getTime()
  }
}

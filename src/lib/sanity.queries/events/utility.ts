export function formatDateTime(dateTimeString?: string): {
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

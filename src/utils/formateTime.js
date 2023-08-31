export function formatDate(timestamp) {
  const date = new Date(timestamp * 1000)
  const options = {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }
  return new Intl.DateTimeFormat('en-US', options).format(date)
}

export function sunTime(timestamp) {
  const date = new Date(timestamp * 1000)
  const options = {
    hour: 'numeric', // Numeric hour (e.g., "4")
    minute: 'numeric', // Numeric minute (e.g., "00")
    hour12: true, // Use 12-hour clock (e.g., "PM")
  }
  return new Intl.DateTimeFormat('en-US', options).format(date)
}


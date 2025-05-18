export const formatTimeUTC = (timeString: string) => {
  const date = new Date(timeString);
  return date.toLocaleString('en-GB', {
    timeZone: 'UTC',
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

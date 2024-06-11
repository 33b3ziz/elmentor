export function formatDate(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInHours = diffInMs / (1000 * 60 * 60);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  const formatTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const formatDateOnly = (date: Date): string => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    return `${formattedDay}/${formattedMonth}`;
  };

  const formatDateWithYear = (date: Date): string => {
    const formattedDate = formatDateOnly(date);
    const year = date.getFullYear();
    return `${formattedDate}/${year}`;
  };

  if (diffInHours < 24) {
    return formatTime(date);
  }

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  if (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  ) {
    return 'yesterday';
  }

  const lastWeek = new Date(now);
  lastWeek.setDate(now.getDate() - 7);

  if (date > lastWeek && date < now) {
    const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return `last ${weekdayNames[date.getDay()]}`;
  }

  if (date.getFullYear() === now.getFullYear()) {
    return formatDateOnly(date);
  }

  return formatDateWithYear(date);
}
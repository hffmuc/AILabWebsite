const formatDate = (
  startDate,
  endDate,
  includeDay = true,
  includeTime = false,
  includeWeekday = true
) => {
  const dateOptions = {
    weekday: includeDay ? 'long' : undefined,
    year: 'numeric',
    month: 'long',
    day: includeDay ? 'numeric' : undefined,
  };

  const timeOptions = {
    hour: includeTime ? 'numeric' : undefined,
    minute: includeTime ? 'numeric' : undefined,
    hour12: false,
  };

  const startDateString = new Date(startDate).toLocaleDateString(
    'de-DE',
    dateOptions
  );
  let newDateString = startDateString;

  if (includeTime) {
    newDateString += ` ${new Date(startDate).toLocaleTimeString('de-DE', timeOptions)}`;
  }

  if (endDate) {
    const endDateString = new Date(endDate).toLocaleDateString(
      'de-DE',
      dateOptions
    );

    if (endDateString !== startDateString) {
      newDateString += ` - ${endDateString}`;
    } else {
      newDateString += ' - ';
    }
  }

  if (includeTime && endDate) {
    newDateString += ` ${new Date(endDate).toLocaleTimeString('de-DE', timeOptions)}`;
  }

  return newDateString;
};

export default formatDate;

const formatDate = (date) => {
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return new Date(date).toLocaleDateString('de-DE', dateOptions);
};

export default formatDate;

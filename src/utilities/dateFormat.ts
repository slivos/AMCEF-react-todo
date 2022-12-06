export const dateFormat = (str: string) => {
  const [year, month, day] = str.split('-');
  return `${day}. ${month}. ${year}`;
};

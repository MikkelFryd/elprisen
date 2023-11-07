export const getDate = (_date?: string) => {
  const date = _date ? new Date(_date) : new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours() + 1;
  return { year, month, day, hour };
};

export function handleTime(time: string) {
  const formattedDate = new Date(time).getHours();
  if (formattedDate <= 9) {
    return "kl. 0" + formattedDate + ":00";
  }
  return "kl." + formattedDate + ":00";
}

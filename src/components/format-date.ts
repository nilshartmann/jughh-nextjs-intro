export function formatDate(s: string) {
  const date = new Date(s);
  // how to determine locale in Next.js on server side?
  const userLocale = "de";
  return new Intl.DateTimeFormat(userLocale, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(date);
}

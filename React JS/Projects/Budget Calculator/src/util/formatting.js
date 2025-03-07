export const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
});

export const currentDate = new Intl.DateTimeFormat("en-IN", {
  weekday: "long",
  month: "long",
  day: "2-digit",
  year: "numeric",
}).format(new Date());

export const generateId = Number(Date.now().toString().slice(-4));
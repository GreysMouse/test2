export const compareObjectsByDateDesc = (a: any, b: any): number => {
  const d1 = new Date(a.registration_date);
  const d2 = new Date(b.registration_date);

  return d1 > d2 ? -1 : 1;
}

export const getDateFromISO = (isoTime: string) => {
  const date = new Date(isoTime);

  const DD = ('0' + date.getDate()).slice(-2);
  const MM = ('0' + date.getMonth()).slice(-2);
  const YY = ('0' + date.getFullYear()).slice(-2);

  return DD + '.' + MM + '.' + YY;
}

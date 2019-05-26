export const firstLetter = raw => {
  const data = String(raw);
  const regex = /((http)s*:\/\/)*(www.)*/g;
  const onlyUrl = data.replace(regex, '');
  return onlyUrl[0].toUpperCase();
}

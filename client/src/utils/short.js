export const short = (raw, limit = 25) => {
  const data = String(raw);
  if(data.length > limit) {
    return `${data.trim().slice(0, limit)}...`;
  }
  return data;
}

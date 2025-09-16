export const mapArrToString = (arr: (number | string | undefined | null)[]) => {
  return arr.filter((item) => Number.isInteger(item)).map(String)
}

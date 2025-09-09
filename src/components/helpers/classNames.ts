export const classNames = (...args: Array<string | undefined | false>) => {
  return args.filter(Boolean).join(' ')
}

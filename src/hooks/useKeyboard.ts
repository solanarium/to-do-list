import { useEffect } from 'react'

export const useKeyboard = (
  keyName: string,
  cb: () => void,
  dependencies: unknown[],
) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === keyName) {
        cb()
      }
    }

    window.addEventListener('keydown', listener)
    return () => removeEventListener('keydown', listener)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyName, cb, ...dependencies])
}

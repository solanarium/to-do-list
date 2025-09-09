import { useState } from 'react'

export const useToggle = (initionalState: boolean) => {
  const [open, setOpen] = useState(initionalState)

  return [open, () => setOpen((prevOpen) => !prevOpen)] as const
}

import type { ComponentProps, FC, ReactNode } from 'react'

import styles from './Modal.module.css'

type Props = {
  title: string
  children: ReactNode
} & ComponentProps<'div'>

export const Modal: FC<Props> = ({ title, children, ...rest }) => {
  return (
    <div className={styles.backdrop} {...rest}>
      <div className={styles.modal}>
        <p className={styles.title}>{title}</p>
        {children}
      </div>
    </div>
  )
}

import type { FC, ReactNode } from 'react'

import styles from './Modal.module.css'

interface Props {
  title: string;
  children: ReactNode;
}

export const Modal: FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <p className={styles.title}>{title}</p>
        {children}
      </div>
    </div>
  )
}

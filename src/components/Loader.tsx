import { Icon } from './Icon'
import style from './Loader.module.css'

export const Loader = () => {
  return (
    <div>
      <Icon className={style.loader} name="loader" />
    </div>
  )
}

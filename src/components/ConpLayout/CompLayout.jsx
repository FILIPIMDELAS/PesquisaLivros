import style from './CompLayout.module.css'
import Header from '../header/header'

export default function CompLayout({ children }) {
  return (
    <div className={style.divContentAll}>
      <Header />
      {children}
    </div>
  )
}
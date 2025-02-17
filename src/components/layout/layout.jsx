/* eslint-disable react/prop-types */
import Header from '../header/header'
import Side from '../side/side'
import style from './layout.module.css'

export default function Layout({ children }){
  return(
    <div className={style.divContentAll}>
      <Header />
      <div className={style.divContentContentAll}>
        <Side />
        {children}
      </div>
    </div>
  )
}
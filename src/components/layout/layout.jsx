/* eslint-disable react/prop-types */
import CompLayout from '../ConpLayout/CompLayout'
import Side from '../side/side'
import style from './layout.module.css'

export default function Layout({ children }){
  return(
    <CompLayout>
      <div className={style.divContentContentAll}>
        <Side />
        {children}
      </div>
    </CompLayout>
  )
}
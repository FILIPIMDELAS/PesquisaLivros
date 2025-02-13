/* eslint-disable react/prop-types */
import style from './button.module.css'

export default function Button({ label, onClick }){
  return(
    <button className={`${style.Button}`} onClick={onClick}>{label}</button>
  )
}
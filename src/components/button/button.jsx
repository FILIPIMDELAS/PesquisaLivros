/* eslint-disable react/prop-types */
import style from './button.module.css'

export default function Button({ clas, label, onClick }){
  return(
    <button className={`${style.buttons} ${clas ? style[clas] : ''}`} onClick={onClick}>{label}</button>
  )
}
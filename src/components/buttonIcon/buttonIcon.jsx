/* eslint-disable react/prop-types */
import Button from '../button/button'
import style from './buttonIcon.module.css'
import * as LucideIcons from "lucide-react"

export default function ButtonIcon({ clasIcons, clasBut,  name, onClick, label }){
  const LucideIcon = LucideIcons[name]

  if(!LucideIcon){
    console.warn(`Ícone ${name} não encontrado.`)
    return null;
  }

  return(
    <div className={style.divButtonIcon} onClick={onClick}>
      <Button clas={clasBut} label={label}/>
      <LucideIcon className={`${style.iconsBut} ${clasIcons ? style[clasIcons] : ''}`}/>
    </div>
  )
}
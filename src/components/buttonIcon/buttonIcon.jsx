/* eslint-disable react/prop-types */
import { useState } from 'react'
import Button from '../button/button'
import style from './buttonIcon.module.css'
import * as LucideIcons from "lucide-react"

export default function ButtonIcon({ clasIcons, clasBut,  name, onClick, label }){
  const LucideIcon = LucideIcons[name]
  const [iconSelect, setIconsSelect] = useState(false)

  const selectIcon = () => {
    onClick()
    setIconsSelect(!iconSelect)
  }

  if(!LucideIcon){
    console.warn(`Ícone ${name} não encontrado.`)
    return null;
  }

  return(
    <div className={`${style.divButtonIcon}`} onClick={selectIcon}>
      <Button clas={clasBut} label={label}/>
      <LucideIcon className={`${clasIcons ? style[clasIcons] : ''} ${style.iconsBut} ${iconSelect ? style[`iconsSelect`] : ''}`}/>
    </div>
  )
}
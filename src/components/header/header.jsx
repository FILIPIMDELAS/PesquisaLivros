import style from './header.module.css'
import ButtonIcon from '../buttonIcon/buttonIcon'

export default function Header(){
  const handleClick = () => {

  }

  return(
    <>
    <div className={style.divSepTop}></div>
    <div className={style.divHeader}>
      <ButtonIcon name={'ChevronDown'} onClick={() => {handleClick()}} label={"Romance"}/>
      <ButtonIcon name={'ChevronDown'} onClick={() => {handleClick()}} label={"Ficção"}/>
      <ButtonIcon name={'ChevronDown'} onClick={() => {handleClick()}} label={"Ação"}/>
      <ButtonIcon name={'ChevronDown'} onClick={() => {handleClick()}} label={"Aventura"}/>
    </div>
    <div className={style.divSepBotton}></div>
    </>
  )
}
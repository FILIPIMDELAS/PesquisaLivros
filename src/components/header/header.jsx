import style from './header.module.css'
import ButtonIcon from '../buttonIcon/buttonIcon'
import { useNavigate } from 'react-router'

export default function Header(){
  const navigate = useNavigate()

  const handleClick = () => {
    
  }

  const handleClickCart = () => {
    navigate('/Carrinho')
  }

  return(
    <>
      <div className={style.divSepTop}></div>
      <div className={style.divHeader}>
        <ButtonIcon name={'ChevronDown'} onClick={() => {handleClick()}} label={"Romance"}/>
        <ButtonIcon name={'ChevronDown'} onClick={() => {handleClick()}} label={"Ficção"}/>
        <ButtonIcon name={'ChevronDown'} onClick={() => {handleClick()}} label={"Ação"}/>
        <ButtonIcon name={'ChevronDown'} onClick={() => {handleClick()}} label={"Aventura"}/>
        <ButtonIcon name={"ShoppingCart"} clasIcons={"iconsKart"} onClick={handleClickCart}/>
      </div>
      <div className={style.divSepBotton}></div>
    </>
  )
}
import Button from '../button/button'
import style from './side.module.css'

export default function Side(){
  const handleClick = () => {

  }

  return(
    <div className={style.divSide}>
      <Button clas={"buttonsSide"} onClick={() => {handleClick()}} label={"Cor"}/>
      <Button clas={"buttonsSide"} onClick={() => {handleClick()}} label={"Tamanho"}/>
    </div>
  )
}
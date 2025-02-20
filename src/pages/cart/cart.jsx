import style from './Cart.module.css'
import CompLayout from '../../components/ConpLayout/CompLayout'
import { useGlobalContext } from '../../hooks/globalContext'

export default function Cart() {
  const { cardItens } = useGlobalContext()

  return (
   <CompLayout>
    <div className={style.divContentAllCart}>
      <div className={style.divContentCardCEP}>
        <div className={style.divContentItensCard}>
          <p>itens</p>
        </div>
        <div className={style.divCEPInfo}>
          <p>cep</p>
        </div>  
      </div>
      <div className={style.divResumeValue}>
        <p>SubTotal: {}</p>
        <p>Valor Frete: {}</p>
        <p>Total: {}</p>
      </div>
    </div>
   </CompLayout>
  )
}
import Layout from '../../components/layout/layout'
import style from './home.module.css'
import { useGlobalContext } from '../../hooks/globalContext'

export default function Home(){
  const { cardItens, loading, setIndex } = useGlobalContext()

  const maxLength = 30;

  return(
    <Layout>
      <div className={style.divSubContent}>
        {loading? <p>Carregando</p> : 
          (cardItens.map((card, index) => {
            return(
              <>
                <div className={style.divContentBooks}>
                  <img src={card.volumeInfo.imageLinks?.thumbnail} alt="" />
                  <p key={index}>{card.volumeInfo.title.length > maxLength ? `${card.volumeInfo.title.slice(0, maxLength)}...` : card.volumeInfo.title}</p>
                </div>
              </>
            )
          })
        )}
      </div>
      <div className={style.divButtonsFooter}>
        <button onClick={() => {setIndex(1)}}>1</button>
        <button onClick={() => {setIndex(2)}}>2</button>
        <button onClick={() => {setIndex(3)}}>3</button>
        <button onClick={() => {setIndex(4)}}>4</button>
        <button onClick={() => {setIndex(5)}}>5</button>
        <button onClick={() => {setIndex(6)}}>6</button>
        <button onClick={() => {setIndex(7)}}>7</button>
        <button onClick={() => {setIndex(8)}}>8</button>
        <button onClick={() => {setIndex(9)}}>9</button>
        <button onClick={() => {setIndex(10)}}>10</button>
        <button onClick={() => {setIndex(11)}}>11</button>
      </div>
    </Layout>
  )
}
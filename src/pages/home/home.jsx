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
      <div>
        <button onClick={() => {setIndex(1)}}>1</button>
      </div>
    </Layout>
  )
}
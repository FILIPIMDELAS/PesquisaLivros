/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";

const GlobalContext = createContext()

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export const GlobalProvider = ({ children }) => {
  const [ cardItens, setCardItens ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ category, setCategory ] = useState('science')
  const [ index, setIndex ] = useState(1)

  const keyAPI = 'AIzaSyDPjpo8Qf31W-3RPd9KskGPXwFGyUQnE1c'

  useEffect(() => {
    const loadCards = async () => {
      try {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${'*'}&startIndex=${index === 1 ? index : 1 + (40 * index) }&maxResults=20&key=${keyAPI}`

        if (category) {
          url += `&subject=${category}`;
        }

        const response = await fetch(url);
        const data = await response.json();
  
        if (data.items) {
          setCardItens(data.items);
        } else {
          setCardItens([]);
        }
      } catch (err) {
        console.error(`Ocorreu um erro ao buscar os livros. erro: ${err}`);
      } finally {
        setLoading(false);
      }
    }
    loadCards()
  }, [category])

  return(
    <GlobalContext.Provider value={{ cardItens, setCardItens, loading, setLoading, category, setCategory, index, setIndex }}>
      {children}
    </GlobalContext.Provider>
  )
}
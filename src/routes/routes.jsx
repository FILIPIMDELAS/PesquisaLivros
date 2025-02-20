import { Route, Routes } from "react-router"
import Home from "../pages/home/home"
import Cart from "../pages/Cart/Cart"

const routesApp = () => {
  const BackdropAction = ({ children }) => {
    return children
  }

  return(
    <BackdropAction>
      <Routes>
        <Route path="PesquisaLivros/" element={<Home />}/>
        <Route path="/Carrinho" element={<Cart />}/>
      </Routes>
    </BackdropAction>
  )
}

export default routesApp
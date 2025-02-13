import { Route, Routes } from "react-router"
import Home from "../pages/home/home"

const routesApp = () => {
  const BackdropAction = ({ children }) => {
    return children
  }

  return(
    <BackdropAction>
      <Routes>
        <Route path="PesquisaLivros/" element={<Home />}/>
      </Routes>
    </BackdropAction>
  )
}

export default routesApp
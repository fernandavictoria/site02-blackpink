import { ComponentHeader, ComponentFooter } from "./components/index"
import { GlobalStyle } from "./styles/GlobalStyle"
import { Home } from "./pages/home/index"

export function App (){
  return (
    <>
    <GlobalStyle/>
    <ComponentHeader/>
    <Home />
  
    <ComponentFooter/>
    

    </>
  )
}


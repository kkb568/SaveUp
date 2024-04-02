import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import { createContext } from "react"
import Home from "./pages/Home/Home";
import CreateSavings from "./pages/CreateSavings/CreateSavings";
import SavingsDetails from "./pages/SavingDetails/SavingsDetails";
import SavingsPayment from "./pages/SavingsPayment/SavingsPayment";
import Error_404 from "./pages/Error/Error_404";

/* Specified the green color value as a context 
  since it would be used throughout the application.
  Created the context with the green variable,
  which will then be accessed by the other components
  using the useContext hook.
*/

const green : string = "#06B203";
export const Context = createContext(green);

function App() {
  return (
    <Context.Provider value={green}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="create_savings" element={<CreateSavings/>}/>
            <Route path=":savingsName" element={<SavingsDetails/>}/>
            <Route path=":savingsName/addSavings" element={<SavingsPayment/>} />
            <Route path="*" element={<Error_404/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App

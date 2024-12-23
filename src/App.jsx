//jsx file with all routing info for buttons
import{
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import App1 from './App1'
import App2 from './App2'
import Menu3 from './Menu3'
import Homeb from './Homeb'

export default function routing(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<App1></App1>}></Route>
                    <Route path="/home" element={<App1></App1>}></Route>
                    <Route path="/home2" element={<App2></App2>}></Route>
                    <Route path="/menu3" element={<Menu3></Menu3>}></Route>
                    <Route path="/homeb" element={<Homeb></Homeb>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

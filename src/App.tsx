import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import {Login} from "./pages/Login";
import Feed from "./pages/feed";
import { Cadastre } from "./pages/cadastre";
import { AuthContextProvider} from "./context/Auth";



function App() {

  return (
   
    <BrowserRouter> 
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login /> } />
            <Route path="/feed" element={<Feed /> }/> : 
          <Route path="/cadastre" element={<Cadastre /> } />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

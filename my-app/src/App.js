import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import Home from './home';
 
function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login/> }/>
          <Route path='/home' element={ <Home/> }/>

          <Route path="*" element={<p>404 - Página não encontrada</p>} />
        </Routes>
      </BrowserRouter>

      
    );
}
 
export default App;
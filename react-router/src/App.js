

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './component/home';
import About from './component/about';
// import Navbar from './component/navbar';
function App() {
  return (
  <BrowserRouter>
  <Routes path='/' >
    <Route path='/home'element={<Home/>} ></Route>
    <Route path='/about'element={<About/>} ></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;

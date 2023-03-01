
import './App.css';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Movies from './components/Movies/Movies';
import Contact from './components/contact/Contact'
import Detail from './components/Detail/Detail';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Navigation/>
      <h1>HOT MOVIES IN MONTH</h1>
      
      <Routes>
          <Route path='/' element={<Movies/>}></Route>
          <Route path='/detail/:id' element={<Detail/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
      </Routes> 

      <Footer/>
      </div>
      
  );
}

export default App;

// import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { About } from './components/About'
import {Navbar } from './components/Navbar'
import { Users } from './components/Users';
import { UsersDetails } from './components/UsersDetails';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="*" element={<div>Error 404 page not Found  </div>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path ="/Contact" element={<Contact/>}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Users" element={<Users />}></Route>
        <Route path="/Users/:identity" element={<UsersDetails />}></Route>
     
     </Routes>
    </div>
  );
}

export default App;

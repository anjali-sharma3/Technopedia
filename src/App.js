import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';
import Error  from './components/Error';
import Signup from './components/Signup';
import Webdevelopment from './components/Webdevelopment';
import AppDev from './components/Appdevelopment';
import Blockchain from './components/Blockchain';
import Machine from './components/Machinelearning';
import AI from './components/Artificial-intelligence';
import DL from './components/Deep-learning';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/about" element={<About/>}/>
     <Route exact path="/blogs" element={<Blogs/>}/>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path='/signup' element={<Signup/>} />
     <Route exact path='/webdevelopment' element={<Webdevelopment/>}/>
     <Route exact path='/appdevelopment' element={<AppDev/>}/>
     <Route exact path='/blockchain' element={<Blockchain/>}/>
     <Route exact path='/machine-learning' element={<Machine/>}/>
     <Route exact path='/ai' element={<AI/>}/>
     <Route exact path='/deep-learning' element={<DL/>}/>
     <Route path="*" element={<Error/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

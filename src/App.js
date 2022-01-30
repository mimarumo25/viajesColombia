import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, 
  Routes,
  Route} 
  from 'react-router-dom';
import {Formularioregistro} from './components/FormularioRegistro';
import Home from './containers/Home';
import "./styles.css"
function App() {
  return (
    <div className='container mt-2'>
      <Router>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Vivair" element={<Formularioregistro air={"Vivair"}/>}></Route>
          <Route path="/Avianca" element={<Formularioregistro air={"Avianca"}/>}></Route>
          <Route path="/Satena" element={<Formularioregistro air={"Satena"}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
 

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
       
       <BrowserRouter>
       <Routes>
       <Route path='/create' element={ <Create/>} />
       <Route path='/' element={ <Read/>} />
       <Route path='/update' element={ <Update/>} />
       </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;

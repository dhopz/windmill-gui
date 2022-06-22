import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';


function App() {
  
  return (
    <BrowserRouter>
      <div className="Routes">
        <Routes>
          <Route exact path='/' element = {<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
};

export default App;

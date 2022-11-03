
import './App.css';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import LoginForm from './components/LoginForm';
import MainPage from './MainPage';
import Error from './Error';
import CalculatorPage from './CalculatorPage';
import ToDoPage from './ToDoPage';



function App() {





  return (
    <div className='App'>Helloooooo
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<LoginForm/>}/>
            <Route path="mainPage" element={<MainPage/>}/>
            <Route path="calculatorPage" element={<CalculatorPage/>} />
            <Route path="todopage" element={<ToDoPage/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        
        
        </BrowserRouter>
     
    
     </div>
    



     
  );
}

export default App;

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from './component/FormForSubmission';
import FirstScreen from './component/FirstScreen';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstScreen/>} ></Route>
          <Route path='/form' element={<Form/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

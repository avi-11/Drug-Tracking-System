import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Availability }from './components/Home';
import {Accessibility} from './components/Home';
import {Support} from './components/Home';
import Home from './components/Home';
import License from './components/License';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Search from './components/Search';

function App() {
  return (
    <div className='flex'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} >
            <Route path='/' element={<Availability/>}></Route>
            <Route path='acc' element={<Accessibility/>}></Route>
            <Route path='sup' element={<Support/>}></Route>
        </Route>
        <Route path='/license' element={<License/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      <Search/>
    </div>
  )
}

export default App;

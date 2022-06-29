import './App.css';
import {BrowserRouter} from 'react-router-dom'

import Routees from './config/Routees';

import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="w-full h-full">
       <BrowserRouter>
       <Header />
       <SideBar />
       <Routees />
       </BrowserRouter>
    </div>
  );
}

export default App;

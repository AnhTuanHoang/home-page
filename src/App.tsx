import * as React from 'react';
import { BrowserRouter as Router, Route, Link , Routes} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.component';
import Solutions from "./components/solutions";
import AboutUs from "./components/about-us";
import Recruitment from "./components/recruitment";
import News from "./components/news";
import Contact from "./components/contact";
import Offshore from "./components/offshore";


const App: React.FC = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/solutions' element={<Solutions/>}/>
                    <Route path='/about-us' element={<AboutUs/>}/>
                    <Route path='/recruitment' element={<Recruitment/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/offshore' element={<Offshore/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

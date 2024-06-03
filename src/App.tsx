import * as React from 'react';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";

import './App.css';
import Home from './components/home.component';
import Solutions from "./components/solutions";
import AboutUs from "./components/about-us";
import Recruitment from "./components/recruitment";
import News from "./components/news";
import Contact from "./components/contact";
import WhyUs from "./components/why-us";
import {siteMap} from "./utils/site-map";
import NewsDetail from "./components/news/detail";



const App: React.FC = () => {

    return (
        <Router>
            <div>
                <Routes>
                    <Route path={siteMap.home} element={<Home/>}/>
                    <Route path={siteMap.business} element={<Solutions/>}/>
                    <Route path={siteMap.aboutUS} element={<AboutUs/>}/>
                    <Route path={siteMap.recruitment} element={<Recruitment/>}/>
                    <Route path={siteMap.news} element={<News/>}/>
                    <Route path={`${siteMap.news}/:searchParam`} element={<NewsDetail />}/>
                    <Route path={siteMap.contact} element={<Contact/>}/>
                    <Route path={siteMap.whyUs} element={<WhyUs/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

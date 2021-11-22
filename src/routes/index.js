import React from 'react'
import { Routes} from 'react-router-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import About from '../pages/about'
import Contact from '../pages/contact';
import Home from '../pages/home'
import Header from '../component/header';
import Footer from '../component/footer';

const MyRoutes = () => {
    return (
    //     <div className="my_routs">
    // <Router>
    //     <Header/>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    //   <Footer/>
    // </Router>
    //     </div>
    )
}
export default MyRoutes
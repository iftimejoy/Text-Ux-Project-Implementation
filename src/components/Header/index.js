import React from 'react';
import { Link } from 'react-router-dom';


import './styles.css';
import logo from './logo.svg';

  


const Header = () =>(
    <div className="container">
        <header >
            <div class="menu">
                <Link to="/" class="logo">TestUX</Link>
                <div class="menu-left">
                  <Link to="/quiz/1" class="active">UX Test</Link>
                    <Link to="/resources/2">UX Resources</Link>
                    <Link to="/contact/3">More</Link>
                </div>
                <div class="menu-right">
                    <a href="#account">Sign in</a>
                    <a href="#home">Sign up</a>
                </div>    
            </div>
            
         </header>
    </div>
        
);

 



export default Header;


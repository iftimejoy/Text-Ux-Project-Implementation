import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Header from './components/Header';
import Footer from './components/Footer';
import Testux from "./pages/testux";
import Resources from './pages/resources';
import Contact from "./pages/contact";
import Product from "./pages/product";





const Routes = () => (
    <BrowserRouter>
            <Route path="/" component={Header}/>
            <Route exact path="/" component={Main}/>
            <Route path="/quiz/:id" component={Testux}/>
            <Route path="/resources/:id" component={Resources}/>
            <Route path="/products/:id" component={Product}/>
            <Route path="/contact/:id" component={Contact}/>
            <Route path="/" component={Footer}/>
    </BrowserRouter>
       
);

export default Routes;
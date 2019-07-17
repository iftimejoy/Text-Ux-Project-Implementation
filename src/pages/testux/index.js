import React from 'react';


import { Link } from 'react-router-dom';

import './styles.css';

import Routes from '../../routes';


export default class Testux extends React.Component {

     startTest = () => {
         if (Routes === "{/testux/index.js}")
        document.querySelector(".footer").style.display = "none";
        
    };
    

    render() {

        return (
            <div className="container">
                <div classaName="content-test">
                        <h1 className="text-h">Demo questions</h1>
                        <div className="text-test">
                            <p>These 3 questions are just for warming up.</p>
                            <p>Don't worry, the result will not count for the final test.</p>
                        </div>                
                </div>
                                   
            </div>
         
        );
    }
}

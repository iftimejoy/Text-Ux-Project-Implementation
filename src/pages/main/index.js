import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

 
class Main extends React.Component {

   

    render() {
      return (
        <div className="container">
        <div className="main-home">
        <div className="content-main">
            <h1>Test your UX knowledge for free!</h1>
            <div className="txt-content">
                <p>You are challenged! Check how good you are at User Experience Design, the science & art of designing
                    software.</p>
                <p>Can you get our UX Certificate?</p>
            </div>
            <Link to="/quiz/1" className="btn-test"><span>Get start with a Demo</span></Link>
            </div>
            <div className="row">
                <div className="column">
                    <table id="tbl" >
                        <caption>About the test</caption>
                        <tr>
                            <td className="colLeft">Type:</td>
                            <td className="colRight"> Timed quiz test</td>
                        </tr>
                        <tr>
                            <td className="colLeft">Difficulty:</td>
                            <td className="colRight">Medium Level to Advanced</td>
                        </tr>
                        <tr>
                            <td className="colLeft">Time needed:</td>
                            <td className="colRight">Approx. 60 minutes to complete</td>
                        </tr>
                        <tr> 
                            <td className="colLeft">Questions</td>
                            <td className="colRight">50</td>
                        </tr>
                        <tr>
                            <td className="colLeft">Designer:</td>
                            <td className="colRight">David Iftime. <a href="https://www.linkedin.com/in/davidiftime/" target="blank">View profile</a></td>
                        </tr>
                    </table>          
                    </div>
                    <div className="column">
                        <h2>Learn about UX</h2>
                        <ul>
                            <li> &#x02611;  Get a valuable list of UX resources. Including books, tools and websites. <Link to="/resources/2" >View resources</Link></li>
                            <li> &#x02611;  Ask our team for free for details if you don't understand some of the test questions and answers. <Link to="/contact/3">Learn</Link></li>
                            <li> &#x02611;  Book UX consultancy for your daily projects. <Link to="/contact/3">View details</Link></li>
                        </ul>                
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h2>The prize: get the UX Certificate</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                        <ul>
                            <li> &#x02611;  Get a permalink to your certificate to include in your CV or your LinkedIn profile to demonstrate your UX knowledge</li>
                            <li> &#x02611;  It looks so good that you might want to print it and frame it on your office wall. <a href="#certificate">See a preview.</a></li>
                        </ul>                
                    </div>
                    <div className="column">

                    </div>
                </div>
         </div>            
    </div>      
      )
    }
  }


export default Main;
import React from 'react';


import { Link } from 'react-router-dom';

import './styles.css';



export default class Contact extends React.Component {

    render() {

        return (
            <>
                <div class="container">
                    <form action="#">
                        <div class="row">
                        <div class="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-25">
                            <label for="lname">Last Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-25">
                            <label for="country">Country</label>
                        </div>
                        <div class="col-75">
                            <select id="country" name="country">
                            <option value="Romenia">Romenia</option>
                            <option value="Other">Other</option>
                            </select>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-25">
                            <label for="subject">Subject</label>
                        </div>
                        <div class="col-75">
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
                        </div>
                        </div>
                        <div class="row">
                        <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </>
         
        );
    }
}

import React, {Component} from 'react'; 
import Contact from './Contact';
import { BrowserRouter, Link, Switch, Route, HashRouter } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

export default class FirstHeader extends React.Component {

   

    render () {

            return (

                <div>
                    <div className="mobile"> 
        <Menu>
                 <a className="menu-item" href="./">Javier Muñoz</a>
                <a id="home" className="menu-item" href="https://github.com/BrandonMG77">Github</a>
                <a id="about" className="menu-item" href="https://play.google.com/store/apps/developer?id=SpaceMariscal">My React Native Apps</a>
                <a className="menu-item" href="https://brandonmg77.github.io/react-selector/">React Selector</a>
                <a id="contact" className="menu-item" href="./pdf.pdf">Resume</a>
                <a  className="menu-item" href="./#/contact">Contact</a>
            </Menu>
            </div>
                
                        
                <div class="topnav" id="Section1">
                <a class="active" href="./">Javier Muñoz</a>
                <a  href="https://github.com/BrandonMG77">Github</a>
                <a  href="https://brandonmg77.github.io/RaccoonOdysseyresponsive/">Little "game"</a>
                <a  href="https://brandonmg77.github.io/react-selector/">React Selector</a>
                <a href="./pdf.pdf">Resume</a>
                <a href="./#/contact">Contact</a>
                </div>


 </div>

           
              

            )

    }

}
import React, {Component} from "react";
import Main from "./Main";
import About from "./About";


export default class SubHeader extends React.Component {

    render () {

        return <div className="background">
    <div name= "sub"className="sub">
            <h3>About this website</h3>
            <p>This website functionality was implemented using React and 
                Javascript. It's structure was made 
                using JSX (HTML) and CSS </p>

        </div>
        <Main/>
        <About/>

        </div>
        

    }

}
import React from "react";
import "./Nav.css";

const Nav = props => (

   <nav className="bg-nav fixed-top navbar nav-height nav-shadow p-0 tp-text">
   <ul className="row center list-inline m-0 nav-fill nav-height nav-width">
     <li className="col list-inline-item my-auto nav-calc-font p-0 m-0 text-center">
       <a href="/"><i class="fas fa-beer"></i></a>
     </li>
     <li className="message"> {props.message}</li>
     <li className="score">
        Score:    { props.currentScore }  |
        Top Score:   { props.topScore } 
     </li>
   </ul>
 </nav>
);

export default Nav;
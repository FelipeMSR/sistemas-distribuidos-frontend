import { Component } from "react";
import '../../assets/css/navbar.css'

class Navbar extends Component{
    render(){
        return<div>
            <nav class="color navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                
            
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="vertical-line navbar-nav ">
                    <span className = " vertical-line navbar-text "> SISMOS </span>
                    <span className = " vertical-line navbar-text "> pagina genial</span>
                    
                    <li class="nav-item " >
                    <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

        </div>
    }
}
export default Navbar;
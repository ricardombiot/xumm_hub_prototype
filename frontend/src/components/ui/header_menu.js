import { Component } from "inferno";
import BtnLogin from "./btn_login";
import { Link } from "inferno-router";
import { is_login } from "../utils/nav_authorization";

export default class HeaderMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            is_login: is_login()
        }


        this.handleAfterUpdateAuth = this.handleAfterUpdateAuth.bind(this);
    }

    handleAfterUpdateAuth(is_login){
        console.log("UPDATE..")
        this.setState({is_login: is_login})
    }

    user_menu(){
        if(this.state.is_login){
            return [
                <li class="list-inline-item">
            <Link to="/profile">   
            Profile <i class="icon-user"></i>
            </Link>
            </li>]
        }

        return []
    }

    render(){

        return (
        <header id="myheader" class="header menu_fixed">

        <div class="container">
        <ul id="top_menu_2" class="list-inline">
            <li class="list-inline-item"><Link to="/" >
                xAppFreelancer
            </Link></li>
            <li class="list-inline-item">
                <Link to="/job/search/">   
                Search <i class="icon-search"></i>
                </Link>
            </li>
            {this.user_menu()}
            <li class="list-inline-item"><BtnLogin afterUpdateAuth={this.handleAfterUpdateAuth}></BtnLogin></li>
           
        </ul>
        </div>
       
        </header>
       )

    }

}
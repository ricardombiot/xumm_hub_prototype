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
        this.setState({is_login: is_login});
    }

    user_menu(){
        if(this.state.is_login){ 
            return [
            <li class="list-inline-item">
                <Link to="/job/new" class="btn btn-light" id="menu-job">   
                Job <i class="icon-plus"></i>
                </Link>
            </li>,
            <li class="list-inline-item">
                <Link to="/profile" class="btn btn-light" id="menu-profile">   
                Profile <i class="icon-user"></i>
                </Link>
            </li>]
        }

        return []
    }

    render(){

        return (
        <header id="myheader" class="header menu_fixed">

        <div id="header_logo">
            <Link to="/" >
                xAppFreelancer
            </Link>
        </div>


        <div class="container d-flex align-items-center justify-content-center">

            <div>
            <ul id="top_menu_2" class="list-inline">
                <li class="list-inline-item">
                    <Link to="/job/search/" class="btn btn-light" id="menu-search">   
                    Search <i class="icon-search"></i>
                    </Link>
                </li>
                {this.user_menu()}
                <li class="list-inline-item"></li>
            </ul>
            </div>
        </div>

        <div id="header_login">
            <BtnLogin afterUpdateAuth={this.handleAfterUpdateAuth} ></BtnLogin>
        </div>

       
        </header>
       )

    }

}
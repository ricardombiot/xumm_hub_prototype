import { Component } from "inferno";
import BtnLogin from "./btn_login";
import { Link } from "inferno-router";

export default class HeaderMenu extends Component {
    constructor(props) {
        super(props)
    }

    render(){

        return (
        <header id="myheader" class="header menu_fixed">
        <div id="logo">
            <Link to="/">
                xAppFreelancer
            </Link>
        </div>
        <ul id="top_menu">
           
            <li><a href="#sign-in-dialog" id="sign-in" class="login" title="Sign In">Sign In</a></li>
            <li><a href="wishlist.html" class="wishlist_bt_top" title="Your wishlist">Your wishlist</a></li>
            <li><BtnLogin></BtnLogin></li>
        </ul>
        <nav id="menu" class="main-menu">
            <ul>
                <li>
                    <span><Link to="/job/search/">Search</Link></span>
                </li>
            </ul>
        </nav>
       
        </header>
       )

    }

}
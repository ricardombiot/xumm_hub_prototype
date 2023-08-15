

import { Component } from "inferno";
import { is_login } from "../utils/nav_authorization";

export default class BtnLogin extends Component {
    constructor(props) {
        super(props)

        const { afterUpdateAuth } = props;
        this.state = {
            is_login: is_login(),
            afterUpdateAuth: afterUpdateAuth
        }

        this.handle_login = this.handle_login.bind(this);
        this.handle_logout = this.handle_logout.bind(this);
    }

    _check_login(){
        if(!this.state.is_login){
            setTimeout(() => {
                if(is_login()){
                    this.setState({is_login: true})
                }else{
                    this._check_login();
                }
            }, 1000)        
        }
    }

    handle_login() {
        this._check_login();
        xumm.authorize();
        this.state.afterUpdateAuth(this.state.is_login);
    }

    handle_logout() {
        xumm.logout();
        this.setState({is_login: false});
        this.state.afterUpdateAuth(this.state.is_login);
    }


    render(){
        if(this.state.is_login){
            return (<a id="logoutbutton" class="btn btn-light" onclick={this.handle_logout}>Logout</a>)
        }else{
            return (<a id="signinbutton" class="btn btn-primary" onclick={this.handle_login}>Login</a>)
        }
       
    }




}





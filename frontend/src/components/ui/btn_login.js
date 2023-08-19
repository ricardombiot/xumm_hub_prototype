

import { Component } from "inferno";
import { is_login } from "../utils/nav_authorization";

export default class BtnLogin extends Component {
    constructor(props) {
        super(props)

        const { afterUpdateAuth, handleClickLogin } = props;
        this.state = {
            is_login: is_login(),
            afterUpdateAuth: afterUpdateAuth,
            handleClickLogin: handleClickLogin
        }

        this.handle_login = this.handle_login.bind(this);
        this.handle_logout = this.handle_logout.bind(this);
    }

    _check_login(){
        if(!this.state.is_login){
            setTimeout(() => {
                if(is_login()){
                    this.state.afterUpdateAuth(true);
                    this.setState({is_login: true});
                }else{
                    this._check_login();
                }
            }, 1000)        
        }
    }

    handle_login() {
        this._check_login();
        xumm.authorize();
    }

    handle_logout() {
        xumm.logout();
        this.setState({is_login: false});
        this.state.afterUpdateAuth(false);
    }


    render(){
        if(this.state.is_login){
            return (<a id="logoutbutton" class="btn btn-light" onclick={this.handle_logout}><i class="icon-logout-1"></i></a>)
        }else{
            return (<a id="signinbutton" class="btn btn-primary" onclick={this.handle_login}>Login <i class="icon-login-1"></i></a>)
        }
       
    }




}





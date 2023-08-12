

export default class AuthRouting {

    static is_login(){
        return "jwt_xapp" in window;
    }

    static get_user_id(){
        if ("jwt_xapp_user_id" in window){
            return window.jwt_xapp_user_id;
        }else{
            return null;
        }
    }

    static is_owner(owner_id : string){
        return AuthRouting.get_user_id() == owner_id;
    }

}
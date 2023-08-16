
const DEFAULT_HEADERS = { 'Accept': 'application/json', 'Content-Type': 'application/json'}

export function is_login(){
    return 'jwt_xapp' in window && window['jwt_xapp'] != undefined;
}  

export function session_is_owner(user_id : string){
    if (is_login()){
        return 'jwt_xapp_user_id' in window && window['jwt_xapp_user_id'] == user_id;
    }else{
        return false;
    }
}

export function if_login_inject_authorization_header(headers : any){
    if(is_login() && 'jwt_xapp' in window){
        let jwt_xapp = window['jwt_xapp'];
        headers['Authorization'] = 'Bearer ' + jwt_xapp;
    }

    return headers;
}

export async function fetch_auth_post(url : string, body : any, headers : any = DEFAULT_HEADERS) : Promise<any> {
    headers = if_login_inject_authorization_header(headers)
    
    let response = await fetch(url, {
        headers: headers,
        method: "POST",
        body: JSON.stringify(body)
    });

    return await response.json();
}

export async function fetch_auth_get(url : string, headers : any = DEFAULT_HEADERS) : Promise<any> {
    headers = if_login_inject_authorization_header(headers)
    
    let response = await fetch(url, {
        headers: headers,
        method: "GET"
    });

    return await response.json();
}
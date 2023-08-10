
export function is_login(){
    return 'jwt_xapp' in window && window['jwt_xapp'] != undefined;
}  

export function if_login_inject_authorization_header(headers : any){
    if(is_login() && 'jwt_xapp' in window){
        let jwt_xapp = window['jwt_xapp'];
        headers['Authorization'] = 'Bearer ' + jwt_xapp;
    }

    return headers;
}

export async function fetch_auth_post(url : string, headers : any = {}, body : any){
    headers = if_login_inject_authorization_header(headers)
    
    await fetch(url, {
        headers: headers,
        method: "POST",
        body: JSON.stringify(body)
    });
}

export async function fetch_auth_get(url : string, headers : any = {}, body : any){
    headers = if_login_inject_authorization_header(headers)
    
    await fetch(url, {
        headers: headers,
        method: "GET"
    });
}
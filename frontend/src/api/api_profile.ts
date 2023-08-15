import { IJob } from "../models/job";
import { fetch_auth_get, fetch_auth_post } from "./api_with_auth";

export async function get_profile_priv() : Promise<IJob[]> {
    let url = "/api/user/profile/priv"

    let data = await fetch_auth_get(url);
    return data.result;
}

export async function post_update_profile_priv(req_body : any) : Promise<any> {
    let url = `/api/user/profile/priv`;
    
    let data = await fetch_auth_post(url, req_body);
    return data.result;
}
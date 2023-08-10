import { IJob } from "../models/job";
import { fetch_auth_get, fetch_auth_post } from "./api_with_auth";


export async function get_list_jobs() : Promise<IJob[]> {
    let url = "/api/jobs"

    let data = await fetch_auth_get(url);
    return data.result;
}

export async function get_job(job_id : string) : Promise<IJob> {
    let url = `/api/job/${job_id}`
    let data = await fetch_auth_get(url);
    return data.result;
}

export async function register_new_job(job : IJob){
    let url = "/api/job/create"

    let data = await fetch_auth_post(url, job);

    return data.result;
}
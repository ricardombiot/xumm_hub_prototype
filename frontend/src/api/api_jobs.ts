import { IJob } from "../models/job";


export async function get_list_jobs() : Promise<IJob[]> {
    let url = "/api/jobs"

    let response = await fetch(url);

    let data = await response.json();

    return data.result;
}

export async function get_job(job_id : string) : Promise<IJob> {
    let url = `/api/job/${job_id}`

    let response = await fetch(url);

    let data = await response.json();

    return data.result;
}

export async function register_new_job(job : IJob){
    let url = "/api/job"

    let response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(job)
    });

    let data = await response.json();

    return data.result;
}
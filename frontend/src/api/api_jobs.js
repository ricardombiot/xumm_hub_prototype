

export async function get_list_jobs(){
    let url = "/api/jobs"

    let response = await fetch(url);

    let data = await response.json();

    return data.result;
}


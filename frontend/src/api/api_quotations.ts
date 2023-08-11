import { IJobQuotation } from "../models/quotation";
import { fetch_auth_get, fetch_auth_post } from "./api_with_auth";

export async function list_quotation_by_job(job_id : string){
  let url = "/api/quotations";

  let search_criteria = {
    "job_id": job_id
  }
  
  let data = await fetch_auth_post(url, search_criteria);
  return data.result;
}

export async function register_new_quotation(quotation : IJobQuotation){
    let url = "/api/quotation/create"

    let data = await fetch_auth_post(url, quotation);
    return data.result;
}

export async function build_payload_create_escrow(job_id: string, quotation_id : string) : Promise<any> {
  let url = `/api/quotation/create_escrow`;
  
  let req_body = {
    "quotation_id": quotation_id,
    "job_id": job_id,
    "delta_days": "@todo"
  }
  
  let data = await fetch_auth_post(url, req_body);
  return data.result;
}

export async function build_payload_finish_escrow(quotation_id : string) : Promise<any> {
  let url = `/api/quotation/finish_escrow`;
  
  let req_body = {
    "quotation_id": quotation_id
  }
  
  let data = await fetch_auth_post(url, req_body);
  return data.result;
}
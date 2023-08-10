import { IJobQuotation } from "../models/quotation";
import { fetch_auth_post } from "./api_with_auth";



export async function register_new_quotation(quotation : IJobQuotation){
    let url = "/api/quotation/create"

    let data = await fetch_auth_post(url, quotation);
    return data.result;
}
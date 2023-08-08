import { IJobQuotation } from "../models/quotation";



export async function register_new_quotation(quotation : IJobQuotation){
    let url = "/api/quotation"

    let response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(quotation)
    });

    let data = await response.json();

    return data.result;
}
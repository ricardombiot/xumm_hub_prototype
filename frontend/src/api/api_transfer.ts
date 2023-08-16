


import OnlyOneExecutionGuard from "../models/once_execution";
import { build_payload_direct_transfer } from "./api_quotations";
import { fetch_auth_post } from "./api_with_auth";


let TRANSFER_TX_GUARD = new OnlyOneExecutionGuard();

export function sumbit_direct_transfer(quotation_id : string, amount: number, callback : (payload : any) => void = (_)=> {}) {
    let promise_tx = build_payload_direct_transfer(quotation_id, amount);
    
    if(TRANSFER_TX_GUARD.run()){
        promise_tx.then((result : any) => {
            console.log(result);
            let payload_tx = result.payload
            let direct_transfer_id = result.direct_transfer_id
            transfer_xumm_run_tx(payload_tx, (payload) => {
                callback({
                    xumm_payload_uuid: payload.uuid,
                    direct_transfer_id: direct_transfer_id 
                })
            });
        });
    }else{
        console.error("Inferno conflict, handlers was overwrite... try execute more than one time the escrow action.")
    }
}

export async function checks_direct_transfer(xumm_payload_uuid: string, direct_transfer_id: string) : Promise<any> {
    let url = `/api/quotation/direct_transfer/checks`;
    
    let req_body = {
      "xumm_payload_uuid": xumm_payload_uuid,
      "direct_transfer_id": direct_transfer_id
    }
    
    let data = await fetch_auth_post(url, req_body);
    return data.result;
}

function transfer_xumm_run_tx(tx : any, callback : (payload : any) => void = (_)=> {}) : void{
    if("xumm" in window){
        let xumm : any = window["xumm"];

        xumm.payload.create(
            {
                "txjson":tx, 
                "options": {
                     "expire": 5
                }
            }
        ).then(callback)
    }
}
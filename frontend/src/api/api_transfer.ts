


import OnlyOneExecutionGuard from "../models/once_execution";
import { build_payload_direct_transfer } from "./api_quotations";


let TRANSFER_TX_GUARD = new OnlyOneExecutionGuard();

export function sumbit_direct_transfer(quotation_id : string, amount: number, callback : (payload : any) => void = (_)=> {}) {
    let promise_tx = build_payload_direct_transfer(quotation_id, amount);
    
    if(TRANSFER_TX_GUARD.run()){
        promise_tx.then((result : any) => {
            console.log(result);
            xumm_run_tx(result, (payload) => {
                console.log(payload)

                //send_xumm_uuid_transfer(quotation_id, payload.uuid).then(callback);
            });
        });
    }else{
        console.error("Inferno conflict, handlers was overwrite... try execute more than one time the escrow action.")
    }
}


function xumm_run_tx(tx : any, callback : (payload : any) => void = (_)=> {}) : void{
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
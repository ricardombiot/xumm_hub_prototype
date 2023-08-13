import OnlyOneExecutionGuard from "../models/once_execution";
import { build_payload_create_escrow, build_payload_finish_escrow, send_xumm_uuid, send_xumm_uuid_finished } from "./api_quotations";

let CREATE_ESCROW_TX_GUARD = new OnlyOneExecutionGuard();
let FINISH_ESCROW_TX_GUARD = new OnlyOneExecutionGuard();

export function submit_create_escrow(job_id : string, quotation_id : string, delta_days : number = 7, callback : (payload : any) => void = (_)=> {}) {
    let promise_tx = build_payload_create_escrow(job_id, quotation_id);
    
    if(CREATE_ESCROW_TX_GUARD.run()){
        promise_tx.then((result : any) => {
            console.log(result);
            xumm_run_tx(result.tx, (payload) => {
                console.log(payload)
    
                send_xumm_uuid(quotation_id,payload.uuid).then(callback);
            });
        });
    }else{
        console.error("Inferno conflict, handlers was overwrite... try execute more than one time the escrow action.")
    }

}

export function sumbit_finish_escrow(quotation_id : string, callback : (payload : any) => void = (_)=> {}) {
    let promise_tx = build_payload_finish_escrow(quotation_id);
    
    if(FINISH_ESCROW_TX_GUARD.run()){
        promise_tx.then((result : any) => {
            console.log(result);
            xumm_run_tx(result, (payload) => {
                console.log(payload)

                send_xumm_uuid_finished(quotation_id, payload.uuid).then(callback);
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


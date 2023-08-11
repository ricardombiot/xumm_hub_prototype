import { build_payload_create_escrow, build_payload_finish_escrow, send_xumm_uuid } from "./api_quotations";

export function sumbit_create_escrow(job_id : string, quotation_id : string, delta_days : number = 7, callback : (payload : any) => void = (_)=> {}) {
    let promise_tx = build_payload_create_escrow(job_id, quotation_id);
    
    promise_tx.then((result : any) => {
        console.log(result);
        xumm_run_tx(result.tx, (payload) => {
            console.log(payload)

            send_xumm_uuid(quotation_id,payload.uuid).then(callback);
        });
    });
}


export function sumbit_finish_escrow(quotation_id : string, callback : (payload : any) => void = (_)=> {}) {
    let promise_tx = build_payload_finish_escrow(quotation_id);
    
    promise_tx.then((result : any) => {
        console.log(result);
        xumm_run_tx(result, (payload) => {
            console.log(payload)
            callback(payload)
        });
    });
}


async function xumm_run_tx(tx : any, callback : (payload : any) => void = (_)=> {}){
    if("xumm" in window){
        let xumm : any = window["xumm"];

        xumm.payload.create(tx).then(callback)
    }
}
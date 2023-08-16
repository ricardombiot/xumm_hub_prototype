

function 


function xumm_run_tx(tx, callback){
    xumm.payload.create(tx).then(payload => {
      callback(payload);
    })
}
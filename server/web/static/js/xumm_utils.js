

function run_tx(tx){
    xumm.payload.create(tx)
    .then(payload => {
        console.log(payload);
    })
}

// Doc.
// https://xrpl.org/basic-data-types.html#specifying-time
function ripple_epoch_now(){
    const millis = Date.now();
    const epoch_secs = Math.floor(millis / 1000);

    return epoch_secs - 946684800;
}

function calc_cancel_after(delta_days){
    let segs = delta_days * 24 * 60 * 60;
    return ripple_epoch_now() + segs
}

function cast_xrp_to_drops(amount){
    let amount_int = parseInt(amount) * 1000000;

    return `${amount_int}`;
}

function print_xrp(amount){
    if(amount != "0") {
        amount_num = parseFloat(amount) / 1000000;
    }else{
        amount_num = 0
    }

    return `${amount_num} XRP`
}
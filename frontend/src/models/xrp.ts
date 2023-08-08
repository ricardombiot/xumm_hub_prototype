import { InmmutableModel } from "./inmmutable_model";

export interface IXRPValue {
    value: number,
    value_txt: string,
    drops: string
    on_dolars: string
}

// This should be take from API.
const XRP_TO_DOLARS = 0.71; 

export class XRPValue extends InmmutableModel<IXRPValue>  {

    static default(value_txt : string): XRPValue {
        let data : IXRPValue = {
            value: 0.0,
            value_txt: "0.0",
            drops: "0",
            on_dolars: "0.00"
        }
        let xrp = new XRPValue(data);
        xrp.trySetValueFromStr(value_txt);
        return xrp;
    }

    clone() : XRPValue {
        return new XRPValue(this.clone_data())
    }

    calc_dolars(){
        this.data.on_dolars = (this.data.value * XRP_TO_DOLARS).toFixed(2);
    }

    trySetValueFromStr(value_txt : string){

        let is_empty = value_txt == "";
        if(is_empty){
            value_txt = "0";
        }

        let is_last_char_is_dot = value_txt.slice(-1) == '.';
        if(is_last_char_is_dot){
            value_txt += "0";
        }

        const regex = /^(?:\d{1,8}(?:\.\d{1,6})?|\.\d{1,6})$/;
        let new_canditate_value = parseFloat(value_txt);

        if(!Number.isNaN(new_canditate_value) && regex.test(value_txt)) {
            if(new_canditate_value >= 0){
                this.data.value = new_canditate_value;
                this.data.value_txt = value_txt;

                let drops : string = (new_canditate_value / 0.000001).toFixed(0);
                this.data.drops = drops;
                this.calc_dolars();
            }
        }
    }

}
import { InmmutableModel } from "./inmmutable_model";

export interface IXRPValue {
    value: number,
    value_txt: string,
    drops: string
}

export class XRPValue extends InmmutableModel<IXRPValue>  {

    static default(value_txt : string): XRPValue {
        let data : IXRPValue = {
            value: 0.0,
            value_txt: "0.0",
            drops: "0"
        }
        let xrp = new XRPValue(data);
        xrp.trySetValueFromStr(value_txt);
        return xrp;
    }

    clone() : XRPValue {
        return new XRPValue(this.clone_data())
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

        // @TODO - checks that value_txt havent more precision that an a 0.0000001 drop
        //console.log(value_txt);

        let new_canditate_value = parseFloat(value_txt);
        if(!Number.isNaN(new_canditate_value)) {
            if (new_canditate_value == 0){
                this.data.value = 0.0;
                this.data.value_txt = "0.0";
                this.data.drops = "0";
            }else if(new_canditate_value > 0){
                let drops : number = new_canditate_value / 0.000001;
                this.data.value = new_canditate_value;
                this.data.value_txt = value_txt;
                this.data.drops = drops.toString();
            }
        }
    }

}
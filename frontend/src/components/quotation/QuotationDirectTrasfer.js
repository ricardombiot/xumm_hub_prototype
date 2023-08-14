import { Component } from 'inferno';
import XRPInput from './../utils/XRPInput';
import AuthRouting  from "../../components/utils/AuthRouting";
import { sumbit_direct_transfer,  checks_direct_transfer} from "./../../api/api_transfer";

export default class QuotationDirectTransfer extends Component {

    constructor(props) {
        super(props);
        
        const { quotation } = props

        const is_payer = AuthRouting.is_owner(quotation.job.payer.id);
        const is_destine = AuthRouting.is_owner(quotation.destine.id);

        this.state = {
            quotation: quotation,
            total_amount: 0.0,
            is_payer: is_payer,
            is_destine: is_destine,
            is_checking: false,
            is_success: false
        }


        this.handleUpdateTotalAmount = this.handleUpdateTotalAmount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdateTotalAmount(amount){
        //console.log("updateAmount: "+ amount.data.value);
        // Without propague update!
        this.state.total_amount = amount.data.value;
        // this.setState({total_amount: amount.data.value});
        //this.state.quotation.setTotalAmount(amount.data.value);
    }

    handleSubmit(_event){

        console.log(this.state);
        this.setState({is_checking: true});

        sumbit_direct_transfer(this.state.quotation.id, this.state.total_amount, (data) => {
            this.checkDirectTranfer(data.xumm_payload_uuid, data.direct_transfer_id);
        })

        event.preventDefault();
    }

    checkDirectTranfer(xumm_payload_uuid, direct_transfer_id){
        if(this.state.is_checking){
            console.log("checkDirectTranfer...")
            setTimeout(async () => {
                let result = await checks_direct_transfer(xumm_payload_uuid, direct_transfer_id);
                if(result == true){
                    this.setState({is_success: true})
                    this.cron_reload();
                }else{
                    this.checkDirectTranfer(xumm_payload_uuid, direct_transfer_id);
                }
            },1000)
        }
    }

    cron_reload(){
        setTimeout(() => {
            window.location = "/job/" + this.state.quotation.job.id
        },750)
    }


    _render_btn(){
        let text_btn = "";
        if(this.state.is_payer){
            text_btn += `Send XRP to ${this.state.quotation.destine.name} now!`;
        }else if(this.state.is_destine){
            text_btn += `Send XRP to ${this.state.quotation.payer.name} now!`;
        }

        return <button type="submit" class="btn_1 full-width" onsubmit={this.handleSubmit} onclick={this.handleSubmit}>{text_btn}</button>
    }

    render(){

        if(this.state.is_checking){
            let message = "";
            if(this.state.is_success){
                message = "[OK]"
            }

            return (
                <div id="direct_tx" class="form-group mb-3  text-center">
                    <div class="d-flex align-items-center me-3">
                            <strong>Checking Direct Transfer...{message}</strong>
                            <div class="spinner-border ms-auto text-secondary" role="status" aria-hidden="true"></div>
                    </div>
                </div>
            )
        }else{

            return (
                <div id="direct_tx" class="form-group mb-3  text-center">
                 <h4>Direct Transfer:</h4>
                    <XRPInput afterUpdate={this.handleUpdateTotalAmount} initial={0}></XRPInput>
                
                    {this._render_btn()}
                </div>);
        }

    }

}
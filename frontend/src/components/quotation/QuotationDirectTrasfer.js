import { Component } from 'inferno';
import XRPInput from './../utils/XRPInput';
import AuthRouting  from "../../components/utils/AuthRouting";
import { sumbit_direct_transfer } from "./../../api/api_transfer";

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

        sumbit_direct_transfer(this.state.quotation.id, this.state.total_amount, () => {
            console.log("OK");
        })

        event.preventDefault();
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
        return (
            <div id="direct_tx" class="form-group mb-3  text-center">
             <h4>Direct Transfer:</h4>
                <XRPInput afterUpdate={this.handleUpdateTotalAmount} initial={0}></XRPInput>
            
                {this._render_btn()}
            </div>);
    }

}
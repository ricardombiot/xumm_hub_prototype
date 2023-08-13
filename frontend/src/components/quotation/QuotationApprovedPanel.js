import { Component } from "inferno";
import { get_quotation } from "../../api/api_quotations";
import QuotationApprovedEscrow from "./QuotationApprovedEscrow";
import QuotationApprovedDetail from "./QuotationApprovedDetail";
import AuthRouting from "../utils/AuthRouting";

export default class QuotationApprovedPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quotation_id: this.props.quotation_id,
            quotation: "LOADING",
            is_payer: false,
            is_destine: false
        }

    }

    componentDidMount(){
        get_quotation(this.state.quotation_id).then((quotation) => {
            const is_payer = AuthRouting.is_owner(quotation.job.payer.id);
            const is_destine = AuthRouting.is_owner(quotation.destine.id);
            //console.log(quotation);
            this.setState({
                quotation: quotation,
                is_payer: is_payer,
                is_destine: is_destine
            })
        })
    }
    
    

    _render_payer_by_escrow_state(){
        const need_sign_and_check = ["NONE","BUILED","WAITING_XUMM_SIGN"].indexOf(this.state.quotation.escrow_state) != -1;

        if(need_sign_and_check){
            return <QuotationApprovedEscrow quotation={this.state.quotation}></QuotationApprovedEscrow>
        }else{
            return <QuotationApprovedDetail quotation={this.state.quotation}></QuotationApprovedDetail>
        }
    }

    _render_by_user(){

        if(this.state.is_payer){
            return this._render_payer_by_escrow_state();
        }else if(this.state.is_destine){
            return <QuotationApprovedDetail quotation={this.state.quotation}></QuotationApprovedDetail>
        }

        return (<div>Job was assigned already!</div>)
    }

    render(){

        if(this.state.quotation == "LOADING"){
            return (<div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>);
        }else{
            return this._render_by_user();
        }
    }

}

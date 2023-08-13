import { Component } from "inferno";
import AuthRouting  from "../../components/utils/AuthRouting";
import { make_quotation_done, make_quotation_confirm } from "../../api/api_quotations";
import { sumbit_finish_escrow } from "../../api/api_escrow";
import QuotationApprovedWaitingFinished from "./QuotationApprovedWaitingFinished";

export default class QuotationApprovedDetail extends Component {
    constructor(props) {
        super(props)

        const { quotation } = this.props;

        const is_payer = AuthRouting.is_owner(quotation.job.payer.id);
        const is_destine = AuthRouting.is_owner(quotation.destine.id);

        this.state = {
            quotation: quotation,
            is_payer: is_payer,
            is_destine: is_destine,
            waiting_finish_escrow: this._is_waiting_finish_escrow(quotation)
        }


        this.handleDone = this.handleDone.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handle_submit_finish_escrow = this.handle_submit_finish_escrow.bind(this);

    }

    _is_waiting_finish_escrow(quotation){
        return quotation.state == "CONFIRMED" && quotation.escrow_state == "WAITING_XUMM_SIGN_FINISH"
    }

    handle_submit_finish_escrow(){
        this.setState({waiting_finish_escrow: true});
        sumbit_finish_escrow(this.state.quotation.id);
    }

    handleDone(event){
        make_quotation_done(this.state.quotation.id).then((_res) => {
            this.refresh();
        });
    }

    handleConfirm(event){
        make_quotation_confirm(this.state.quotation.id).then((_res) => {
            this.refresh();
        });
    }

    refresh(){
        window.location = "/job/" + this.state.quotation.job.id;
    }



    _render_options(){
        if(this.state.is_destine){
           
            if(this.state.quotation.state == "APPROVED"){
                return (<div class="text-center">
                    <button class="btn_1 full-width" onclick={this.handleDone}>I have finished!</button>
                </div>);
            }else if(this.state.quotation.state == "CONFIRMED"){
                return (<div class="text-center">
                    <button class="btn_1 full-width" onclick={this.handle_submit_finish_escrow}>Finish escrow, Gets your earning now!</button>
                </div>);
            }else{
                return [];
            }
        }

        if(this.state.is_payer){

            if(this.state.quotation.state == "DONE"){
                return (<div class="text-center">
                    <button class="btn_1 full-width" onclick={this.handleConfirm}>Confirm!</button>
                </div>);
            }
            /*else{
                return (<div>OPTIONS: Is payer</div>);
            }*/
        }
    }

    render(){
        if (this.state.waiting_finish_escrow && this.state.is_destine){
            return (<QuotationApprovedWaitingFinished quotation={this.state.quotation}></QuotationApprovedWaitingFinished>)
        }

        return this.render_content();
    }


    render_content(){


        return (<div class="myform custom_bg startup">
        <div class="sub_header_in sticky_header custom_subheader startup">
            <div class="container">
                <h3>Quotation</h3>
            </div>
        
        </div>

        <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-10 mt-5">
            <div class="box_account">
            <h3> <i class="icon-tasks-1"></i> Quotation </h3>
            <div class="form_container custom_gradient_border startup">
            <div class="form-group">
            <label>Destine</label>
            <div>{this.state.quotation.destine.name}</div>
            </div>
            <div class="form-group">
            <label>Total amount</label>
            <div>{this.state.quotation.total_amount} XRP</div>
            </div>
            <div class="form-group mb-3">
            <label class="form-label">Description</label>
            <p>{this.state.quotation.description}</p>
            </div>
            <div class="form-group mb-3">
            <label class="form-label">Escrow Cheched Time</label>
            <p>{this.state.quotation.escrow_checked_at}</p>
            </div>
            <div class="form-group">
            <label>Expire</label>
            <div>@TODO DELTA DAYS</div>
            </div>
            <div class="form-group mb-3">
            <label class="form-label">Escrow Status</label>
            <p>{this.state.quotation.escrow_state}</p>
            </div>
            <div class="form-group mb-3">
            <label class="form-label">State</label>
            <p>{this.state.quotation.state}</p>
            </div>

                {this._render_options()}
            </div>

            </div>
            </div>
        </div>

        </div>)

        }

}
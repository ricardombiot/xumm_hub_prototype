import { Component } from "inferno";
import { sumbit_create_escrow } from "./../../api/api_escrow";
import { checks_escrow } from "../../api/api_quotations";

export default class QuotationApprovedEscrow extends Component {
    constructor(props) {
        super(props)

        const { quotation } = props

        this.state = {
            quotation: quotation,
            is_checking: quotation.escrow_state != "NONE",
            is_checked_success: false
        }

        this.handleSign = this.handleSign.bind(this);
    }

    handleSign(event){
        sumbit_create_escrow(this.state.quotation.job.id, this.state.quotation.id, () => {
            this.setState({ is_checking: true });
            this.checkEscrow();
        });
    }

    componentDidMount(){
        this.checkEscrow();
    }


    checkEscrow(){
        if(this.state.is_checking){
            console.log("checkEscrow...")
            setTimeout(async () => {
                let result = await checks_escrow(this.state.quotation.id);
                console.log(result);
                if(result._action == "SuccessCheck" || result._action == "Checked"){
                    this.setState({is_checked_success: true});
                    this.cron_reload();
                }else{
                    this.checkEscrow();
                }
            },1000)
        }
    }

    cron_reload(){
        setTimeout(() => {
            window.location = "/job/" + this.state.quotation.job.id
        },750)
    }

    render(){
        if(this.state.is_checking){
            return this._render_check();
        }else{
            return this._render_sign_form();
        }
    }

    _render_loader(){
        if(this.state.is_checked_success){
            return (
                <div class="d-flex align-items-center me-3"> 
                    <strong>Checked escrow... [OK]</strong>
                        <div class="spinner-border ms-auto text-secondary" role="status" aria-hidden="true"></div>
                </div>)
        }

        return (<div class="d-flex align-items-center me-3">
            <strong>Checking escrow...</strong>
            <div class="spinner-border ms-auto text-secondary" role="status" aria-hidden="true"></div>
        </div>)
    }

    _render_check(){

            return (
                <div class="myform custom_bg startup">
                <div class="sub_header_in sticky_header custom_subheader startup">
                    <div class="container">
                        <h3>Quotation</h3>
                    </div>
                   
                </div>

                <div class="row justify-content-center">
                <div class="col-xl-7 col-lg-8 col-md-10 mt-5">
                <div class="box_account">
                <h3> <i class="icon-tasks-1"></i> Escrow for Quotation</h3> <small class="float-end pt-2">* Required Deposit</small>
                <div class="form_container custom_gradient_border startup">
                        <div >
                            {this._render_loader()}
                            <img src="/static/videos/close_box.webp" type="video/webp" class="bordered-image img-fluid" loop="loop"></img>
                        </div>
                </div></div></div></div></div>); 

    }

    _render_sign_form(){
        return (    <div class="myform custom_bg startup">
                <div class="sub_header_in sticky_header custom_subheader startup">
                    <div class="container">
                        <h3>Quotation</h3>
                    </div>
                   
                </div>

    <div class="row justify-content-center">
    <div class="col-xl-7 col-lg-8 col-md-10 mt-5">
<div class="box_account">
    <h3> <i class="icon-tasks-1"></i> Escrow for Quotation</h3> <small class="float-end pt-2">* Required Deposit</small>
    <div class="form_container custom_gradient_border startup">
        <div class="form-group">
            <label>Destine</label>
            <div>{this.state.quotation.destine.name}</div>
        </div>
        <div class="form-group">
            <label>Total amount</label>
            <div>{this.state.quotation.total_amount} XRP</div>
        </div>
        <div class="form-group">
            <label>Days</label>
            <div>@TODO DELTA DAYS</div>
        </div>
        <div class="form-group mb-3">
            <label class="form-label">Description</label>
            <p>{this.state.quotation.description}</p>
        </div>
        <div class="text-center"><button class="btn_1 full-width" onclick={this.handleSign}>Sign escrow now!</button></div>
    </div>
   
</div>
</div>
</div>

</div>)
    }
}
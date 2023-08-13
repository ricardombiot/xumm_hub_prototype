import { Component } from "inferno";
import { checks_escrow_finished } from "../../api/api_quotations";

 
export default class QuotationApprovedWaitingFinished extends Component {

    constructor(props) {
        super(props)

        const { quotation } = this.props;

        this.state = {
            quotation: quotation,
            is_checking: true,
            iters: 0
        }

    }

    componentDidMount(){
        this.checkEscrow();
    }

    checkEscrow(){
        if(this.state.is_checking){
            console.log("checkEscrow...")
            setTimeout(async () => {
                let result = await checks_escrow_finished(this.state.quotation.id);
                console.log(result);
                if(result._action == "SuccessCheck" || result._action == "Checked"){
                    this.setState({is_checked_success: true});
                    this.cron_reload();
                }else{
                    this.setState({iters: this.state.iters += 1});
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

    render_video(){
        return (
            <div class="myform custom_bg freelance">
            <div class="sub_header_in sticky_header custom_subheader freelance">
                <div class="container">
                    <h3>Closing quotation</h3>
                </div>
               
            </div>

            <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-10 mt-5">
            <div class="box_account">
            <h3> <i class="icon-tasks-1"></i> Escrow </h3> 
            <div class="form_container custom_gradient_border startup">
                    <div >
                        <div class="d-flex align-items-center me-3">
                            <strong>Checking escrow...</strong>
                            <div class="spinner-border ms-auto text-secondary" role="status" aria-hidden="true"></div>
                        </div>
                        <img src="/static/videos/open_box.webp" type="video/webp" class="bordered-image img-fluid" loop="loop"></img>
                    </div>
            </div></div></div></div></div>); 
    }


    render(){
        return this.render_video();
    }
}
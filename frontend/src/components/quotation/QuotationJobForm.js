
import { Component } from 'inferno';
import { Quotation } from './../../models/quotation';
import { register_new_quotation, get_quotation_by_job } from "./../../api/api_quotations"; 
import XRPInput from './../utils/XRPInput';

export default class QuotationJobForm extends Component {

    constructor(props) {
        super(props);
        const { job_id } = this.props;
        console.log("QuotationJobForm JobId: " + job_id);

        this.state = {
            job_id: job_id,
            quotation_id: null,
            quotation: Quotation.default(job_id),
            is_loading: true
        }

        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleUpdateTotalAmount = this.handleUpdateTotalAmount.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    have_quotation(){
        return this.state.quotation_id != null
    }

    componentDidMount(){
        get_quotation_by_job(this.state.job_id).then((quotation) => {
            console.log(quotation);
            const have_quote = quotation != null;

            if(have_quote){
                let new_quotation = this.state.quotation.clone();

                new_quotation.setDescription(quotation.description);
                new_quotation.setTotalAmount(quotation.total_amount);
                this.setState({
                    quotation_id: quotation.id,
                    quotation: new_quotation , 
                    is_loading: false
                });
            }else{
                this.setState({
                    quotation_id: null,
                    is_loading: false
                })
            }

            console.log(this.state);
        }).catch((err) => {
            console.log(err)
        })
    }

    handleChangeDescription(event){
        let new_quotation = this.state.quotation.clone();
        new_quotation.setDescription(event.target.value);
        this.setState({quotation: new_quotation});
    }

    handleUpdateTotalAmount(amount){
        //console.log("updateAmount");
        this.state.quotation.setTotalAmount(amount.data.value);
    }

    handleSubmit(event){
        let quotation = this.state.quotation.raw();

        register_new_quotation(this.state.quotation.raw()).then((result) => {
            let redirect_url = `/job/${quotation.job_id}`; 
            // Make refresh... automatic detects that have a quotation.
            window.location.href = redirect_url;
        })

        event.preventDefault();
    }



    _render_title_form(){
        if(this.have_quotation()){
            return (
                <div>
                <div class="sub_header_in sticky_header custom_subheader freelance">
                    <div class="container">
                        <h3>Improve your quote!</h3>
                    </div>
                   
                </div>
                <p>...options..</p>
                </div>)
        }else{
            return (
                <div class="sub_header_in sticky_header custom_subheader freelance">
                    <div class="container">
                        <h3>Quote now!</h3>
                    </div>
                </div>)
        }

    }

    _render_form(){

return (
    <div class="myform custom_bg freelance">
        {this._render_title_form()}

    <div class="row justify-content-center">
    <div class="col-xl-7 col-lg-8 col-md-10 mt-5">
<div class="box_account">
    <h3> <i class="icon-tasks-1"></i> Quotation </h3> <small class="float-end pt-2">* Required Fields</small>
    <div class="form_container custom_gradient_border freelance">
        <div class="form-group">
            <label>Total amount</label>
            <XRPInput afterUpdate={this.handleUpdateTotalAmount} initial={this.state.quotation.data.total_amount}></XRPInput>
        </div>
        <div class="form-group mb-3">
            <label class="form-label">Description</label>
            <textarea   class="form-control" 
                        name="description"
                        value={this.state.quotation.data.description} 
                        onInput={this.handleChangeDescription}
                        rows="25" 
                        style="min-height: 200px !important;">
            </textarea>
        </div>
        <div class="text-center"><button type="submit" class="btn_1 full-width" onsubmit={this.handleSubmit} onclick={this.handleSubmit}>Publish now!</button></div>
    </div>
   
</div>
</div>
</div>

</div>
)

}

    render(){
        if(this.state.is_loading) {
            return (<div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>);
        }else{
            return this._render_form();
        }
    }


}
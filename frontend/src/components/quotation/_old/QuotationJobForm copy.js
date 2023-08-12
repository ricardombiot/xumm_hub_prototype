import FormComponent from "../utils/FormComponent";
import XRPInput from './../utils/XRPInput';

export default class QuotationJobForm extends FormComponent {

    constructor(props) {
        super(props);
        
        this.state = {
            description: "",
            total_amount: 0.0
        }
        
        this.handleUpdateTotalAmount = this.handleUpdateTotalAmount.bind(this);
    }

    onSubmit(formData){
        console.log(formData);
    }

    handleUpdateTotalAmount(amount){
        this.state.quotation.setTotalAmount(amount.data.value);
    }

    render(){

return (
    <div class="myform custom_bg freelance">
        <div class="sub_header_in sticky_header custom_subheader freelance">
            <div class="container">
                <h3>Quote now!</h3>
            </div>
        </div>

    <div class="row justify-content-center">
    <div class="col-xl-7 col-lg-8 col-md-10 mt-5">
<div class="box_account">
    <h3 class="new_client">Information</h3> <small class="float-end pt-2">* Required Fields</small>
    <div class="form_container custom_gradient_border freelance">
        <div class="form-group">
            <label>Total amount</label>
            <XRPInput afterUpdate={this.handleUpdateTotalAmount}></XRPInput>
        </div>
        <div class="form-group mb-3">
            <label class="form-label">Description</label>
            <textarea   class="form-control" 
                        name="description"
                        value={this.state.description || ''}
                        onInput={this.handleInputChange}
                        rows="25" 
                        style="min-height: 200px !important;">
            </textarea>
        </div>
        <div class="form-group">
            <label class="container_check">Accept <a href="#0">Terms and conditions</a>
                <input type="checkbox"></input>
                <span class="checkmark"></span>
            </label>
        </div>
        <div class="text-center"><button type="submit" class="btn_1 full-width" onsubmit={this.handleSubmit} onclick={this.handleSubmit}>Publish now!</button></div>
    </div>
   
</div>
</div>
</div>

</div>
)

}


}
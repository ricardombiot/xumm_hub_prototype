import { Component } from "inferno";
import FormComponent from "../utils/FormComponent";

export default class JobFormPage extends FormComponent {

    constructor(props) {
        super(props);
        
        this.state = {
            title: "Title2"
        }
        
        console.log(this.state);

       // this.handleInputChange = this.handleInputChange.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);
    }

    onSubmit(formData){
        console.log(formData);
    }

    /*
    handleInputChange(event){
        console.log("... InputChange");
        console.log(this.state);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.onSubmit(this.state);
    }*/


    render(){

return (
    <div class="myform custom_bisque_bg">
<div class="sub_header_in sticky_header">
		<div class="container">
			<h1>Listing new job</h1>
		</div>
	</div>

    <div class="row justify-content-center">
    <div class="col-xl-7 col-lg-8 col-md-10 mt-5">
<div class="box_account">
    <h3 class="new_client">Information</h3> <small class="float-end pt-2">* Required Fields</small>
    <div class="form_container custom_gradient_border">
        <div class="form-group">
            <input type="text" 
                   class="form-control"
                   name="title"
                   value={this.state.title || ''}
                   onInput={this.handleInputChange}
                   placeholder="Title*"></input>
        </div>
        <div class="form-group">
            <label>Budget</label>
            <select 
                class="form-control" 
                name="budget_range"
                value={this.state.budget_range || ''}
                onChange={this.handleInputChange}
                id="job_bugdet_range" >
                  <option>less 1000 XRP</option>
                  <option selected="true">1000 - 3000 XRP</option>
                  <option>3000 - 6000 XRP</option>
                  <option>+ 10000 XRP</option>
            </select>
        </div>
        <div class="form-group">
            <label>Categories</label>
            ...
        </div>
        <hr></hr>
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
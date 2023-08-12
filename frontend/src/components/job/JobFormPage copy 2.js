import { Component } from "inferno";
import ControlledFormComponent from "../utils/ControllerFormComponent";

export default class JobFormPage extends Component {

    constructor(props){
        super(props);
        console.log(this.state);
    }

    handleInputChange(){
        
    }
    
    handleFormSubmit(formData){
        console.log(formData);
        // Aquí puedes realizar cualquier acción con los datos del formulario
    };
    

    render(){

return (
    <ControlledFormComponent initialFormData={{ title: 'hola', budget_range: '' }} onSubmit={this.handleFormSubmit}>
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
    <div class="form_container">
        <div class="form-group">
            <input type="text" 
                   class="form-control"
                   name="title"
                   value={this.state.formData.title || ''}
                   onChange={this.handleInputChange}
                   placeholder="Title*"></input>
        </div>
        <div class="form-group">
            <label>Budget</label>
            <select 
                class="form-control" 
                name="budget_range"
                value={this.state.formData.budget_range || ''}
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
                        value={this.state.formData.description || ''}
                        onChange={this.handleInputChange}
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
        <div class="text-center"><button type="submit" class="btn_1 full-width">Publish now!</button></div>
    </div>
   
</div>
</div>
</div>

</div>
</ControlledFormComponent>
)

}


}
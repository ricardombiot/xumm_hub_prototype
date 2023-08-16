import { Component } from "inferno";
import FormComponent from "../utils/FormComponent";
import { register_new_job } from "../../api/api_jobs";
import CategoriesSelector from "./../ui/CategoriesSelector";
import { categories_default} from "./../utils/Categories";

export default class JobFormPage extends FormComponent {

    constructor(props) {
        super(props);
        
        this.state = {
            title: "",
            budget_range: "1000_3000xrp",
            description: "",
            categories: categories_default()
        }
        
        this.handleUpdateCategories = this.handleUpdateCategories.bind(this);
    }

    onSubmit(formData){
        console.log(formData);

        let job = {
          title: formData.title,
          description: formData.description,
          budget_range: formData.budget_range,
          categories: formData.categories
        }

        register_new_job(job).then((result) => {
            let new_job_id = result.id
            window.location.href = "/job/" + new_job_id;
        })
    }

    handleUpdateCategories(categories){
        this.state.categories = categories;
    }

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
                  <option value="less_1000xrp">less 1000 XRP</option>
                  <option selected="true"  value="1000_3000xrp">1000 - 3000 XRP</option>
                  <option value="3000_6000xrp">3000 - 6000 XRP</option>
                  <option value="more_10000xrp">+ 10000 XRP</option>
            </select>
        </div>
        <div class="form-group">
            <label>Categories</label>
            <CategoriesSelector handleUpdateCategories={this.handleUpdateCategories}></CategoriesSelector>
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
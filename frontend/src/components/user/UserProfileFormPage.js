
import FormComponent from "../utils/FormComponent";
import {get_profile_priv, post_update_profile_priv} from "./../../api/api_profile";

const DEFAULT_VALUES = {
    email: "",
    name: "",
    last_name: "",
    full_address: "",
    city: "",
    postal_code: "",
    country: "",
    phone: "",
    bio: ""
}

export default class UserProfileFormPage extends FormComponent {

    constructor(props) {
        super(props);
        
        this.state = {
            email: "",
            name: "",
            last_name: "",
            full_address: "",
            city: "",
            postal_code: "",
            country: "",
            phone: "",
            bio: ""
        }
        
    }

    componentDidMount(){
        console.log("load profile...")
        get_profile_priv().then((profile) => {
            console.log(profile)
            this.setState(profile)
        })
    }
    

    onSubmit(formData){
        formData = this._swarp_undef_values_by_default(formData);
        console.log(formData);


        post_update_profile_priv(formData).then((result) => {
            console.log(result);
            window.location.href = "/profile";
        })
    }

    _swarp_undef_values_by_default(formData) {
        let mergedValues = {};
        for (const key in DEFAULT_VALUES) {
            if(formData[key] == undefined){
                mergedValues[key] = DEFAULT_VALUES[key];
            }else{
                mergedValues[key] = formData[key];
            }
        }

        return mergedValues;
    }

    render(){

return (
    <div class="myform custom_bisque_bg">
<div class="sub_header_in sticky_header">
		<div class="container">
			<h1>Profile</h1>
		</div>
	</div>

    <div class="row justify-content-center">
    <div class="col-xl-7 col-lg-8 col-md-10 mt-5">
<div class="box_account">
    <h3 class="new_client">Information</h3> <small class="float-end pt-2">* Required Fields</small>
    <div class="form_container custom_gradient_border">
    <div class="form_container">
        <div class="form-group">
            <input  type="email" 
                    class="form-control" 
                    name="email"
                    value={this.state.email || ''}
                    onInput={this.handleInputChange}  
                    id="email" 
                    placeholder="Email"></input>
        </div>
        <hr></hr>

        <div class="private box">
            <div class="row g-0">
                <div class="col-6 pe-1">
                    <div class="form-group">
                        <input  type="text"
                                name="name"
                                value={this.state.name || ''}
                                onInput={this.handleInputChange}  
                                class="form-control" 
                                placeholder="Name*"></input>
                    </div>
                </div>
                <div class="col-6 ps-1">
                    <div class="form-group">
                        <input  type="text" 
                                name="last_name"
                                value={this.state.last_name || ''}
                                onInput={this.handleInputChange} 
                                class="form-control" 
                                placeholder="Last Name"></input>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <input type="text" 
                                name="full_address"
                                value={this.state.full_address || ''}
                                onInput={this.handleInputChange} 
                               class="form-control" 
                               placeholder="Full Address"></input>
                    </div>
                </div>
            </div>


            <div class="row g-0">
                <div class="col-6 pe-1">
                    <div class="form-group">
                        <input type="text" 
                            name="city"
                            value={this.state.city || ''}
                            onInput={this.handleInputChange} 
                            class="form-control" 
                            placeholder="City"></input>
                    </div>
                </div>
                <div class="col-6 ps-1">
                    <div class="form-group">
                        <input type="text" 
                                name="postal_code"
                                value={this.state.postal_code || ''}
                                onInput={this.handleInputChange} 
                                class="form-control" placeholder="Postal Code"></input>
                                                  
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                    <input type="text" 
                                name="country"
                                value={this.state.country || ''}
                                onInput={this.handleInputChange} 
                                class="form-control" placeholder="Country"></input>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <input type="text" 
                                class="form-control" 
                                name="phone"
                                value={this.state.phone || ''}
                                onInput={this.handleInputChange}
                                placeholder="Telephone "></input>
                    </div>
                </div>
            </div>
        </div>


        
        </div>


        <div class="form-group mb-3">
            <label class="form-label">Bio</label>
            <textarea   class="form-control" 
                        name="bio"
                        value={this.state.bio || ''}
                        onInput={this.handleInputChange}
                        rows="25" 
                        style="min-height: 200px !important;">
            </textarea>
        </div>

        <div class="text-center"><button type="submit" class="btn_1 full-width" onsubmit={this.handleSubmit} onclick={this.handleSubmit}>Update profile</button></div>
    </div>
   
</div>
</div>
</div>

</div>
)

}


}
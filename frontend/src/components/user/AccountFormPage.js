import { Component } from "inferno";

export default class AccountFormPage extends Component {
    constructor(props) {
        super(props);


    }

    render(){

return (
    <div>
<div class="sub_header_in sticky_header">
		<div class="container">
			<h1>Account</h1>
		</div>
	</div>

    <div class="row justify-content-center">
    <div class="col-xl-7 col-lg-8 col-md-10 mt-5">
<div class="box_account">
    <h3 class="new_client">Business Information</h3> <small class="float-end pt-2">* Required Fields</small>
    <div class="form_container">
        <div class="form-group">
            <input type="email" class="form-control" name="email" id="email" placeholder="Email*"></input>
        </div>
        <div class="form-group">
            <input type="password" class="form-control" name="password_in_2" id="password_in_2" value="" placeholder="Password*"></input>
        </div>
        <hr></hr>
        <div class="form-group">
            <label class="container_radio" style="display: inline-block; margin-right: 15px;">Private
                <input type="radio" name="client_type" checked value="private"></input>
                <span class="checkmark"></span>
            </label>
            <label class="container_radio" style="display: inline-block;">Company
                <input type="radio" name="client_type" value="company"></input>
                <span class="checkmark"></span>
            </label>
        </div>
        <div class="private box">
            <div class="row g-0">
                <div class="col-6 pe-1">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Name*"></input>
                    </div>
                </div>
                <div class="col-6 ps-1">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Last Name*"></input>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Full Address*"></input>
                    </div>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-6 pe-1">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="City*"></input>
                    </div>
                </div>
                <div class="col-6 ps-1">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Postal Code*"></input>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <div class="custom-select-form">
                            <select class="wide add_bottom_10" name="country" id="country">
                                    <option value="" selected>Country*</option>
                                    <option value="Europe">Europe</option>
                                    <option value="United states">United states</option>
                                    <option value="Asia">Asia</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Telephone *"></input>
                    </div>
                </div>
            </div>
        </div>
        <div class="company box" style="display: none;">
            <div class="row g-0">
                <div class="col-12">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Company Name*"></input>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Full Address"></input>
                    </div>
                </div>
            </div>

            <div class="row g-0">
                <div class="col-6 pe-1">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="City*"></input>
                    </div>
                </div>
                <div class="col-6 ps-1">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Postal Code*"></input>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <div class="custom-select-form">
                            <select class="wide add_bottom_10" name="country" id="country">
                                    <option value="" selected>Country*</option>
                                    <option value="Europe">Europe</option>
                                    <option value="United states">United states</option>
                                    <option value="Asia">Asia</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Telephone *"></input>
                    </div>
                </div>
            </div>
        </div>

        <hr></hr>
        <div class="form-group">
            <label class="container_check">Accept <a href="#0">Terms and conditions</a>
                <input type="checkbox"></input>
                <span class="checkmark"></span>
            </label>
        </div>
        <div class="text-center"><input type="submit" value="Register" class="btn_1 full-width"></input></div>
    </div>
   
</div>
</div>
</div>

</div>
)

}


}
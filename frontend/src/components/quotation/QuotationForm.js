import { Component } from 'inferno';
import { Quotation } from './../../models/quotation';
import { register_new_quotation } from "./../../api/api_quotations"; 
import XRPInput from './../utils/XRPInput';

export default class QuotationForm extends Component {
    constructor(props) {
        super(props);
        const { job_id } = this.props;
        console.log("QuotationForm JobId: " + job_id);

        this.state = {
            quotation: Quotation.default(job_id)
        }

        this.handleChangeTotalAmount = this.handleChangeTotalAmount.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeDescription(event){
        let new_quotation = this.state.quotation.clone();
        new_quotation.setDescription(event.target.value);
        this.setState({quotation: new_quotation});
    }

    handleChangeTotalAmount(event){
        let new_quotation = this.state.quotation.clone();
        new_quotation.setTotalAmount(event.target.value);
        this.setState({quotation: new_quotation});
    }

    handleSubmit(event){
        console.log(this.state.quotation);

        let quotation = this.state.quotation.raw();

        register_new_quotation(this.state.quotation.raw()).then((result) => {
            let redirect_url = `${quotation.job_id}/quote/${result.id}`; 
            window.location.href = redirect_url;
        })

        event.preventDefault();
    }

    render() {
      return <div>
            <form onSubmit={this.handleSubmit}>
            <div class="m-5">
              <h1>Quotation</h1>
              <div class="form-group">
                <label>Description</label>
                <textarea class="form-control" id="quotation_description" rows="5" value={this.state.quotation.description} onInput={this.handleChangeDescription}></textarea>
              </div>
              <div class="form-group">
                <label>Total amount</label>
                <input type="text" class="form-control" id="quotation_total_amount" placeholder="" value={this.state.quotation.total_amount} onInput={this.handleChangeTotalAmount}></input>
              </div>
              <XRPInput label="Total Amount"></XRPInput>
              <input type="submit" value="Submit" />
            </div>
            </form>
        </div>
    }
}

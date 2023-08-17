import { Component } from 'inferno';
import { get_job } from './../../api/api_jobs';
import JobRow from './JobRow';
//import QuotationForm  from "./../quotation/QuotationForm";
import QuotationsListForAdmin  from "./../quotation/QuotationsListForAdmin";
import QuotationAsideContactForm from '../quotation/QuotationAsideContactForm';
import QuotationJobForm from '../quotation/QuotationJobForm';
import QuotationApprovedPanel from '../quotation/QuotationApprovedPanel';
import AuthRouting from './../../components/utils/AuthRouting';
import { JOB_CATEGORIES } from "./../utils/Categories";
import CategoriesSelector from "./../ui/CategoriesSelector";

class JobPage extends Component {
    constructor(props) {
        super(props);
        let params = props.match.params;

        this.state = {
            job: "NOT_LOADED",
            job_id: params.job_id 
        };
    }

    componentDidMount(){
        get_job(this.state.job_id).then((job) => {
            //
			console.log(job);
			job.categories = JSON.parse(job.categories);
			console.log(job);
            this.setState({job: job})
        })
    }

	_render_job_bottom_by_user(){
		const have_approved_quotation = this.state.job.approved_quotation != undefined;
		if(have_approved_quotation) {	
			return ( <QuotationApprovedPanel quotation_id={this.state.job.approved_quotation.id} ></QuotationApprovedPanel>)
		}
		
		const is_owner = AuthRouting.is_owner(this.state.job.payer.id);
		const is_freelance = !is_owner;

		if(is_freelance){
			return (<QuotationJobForm job_id={this.state.job.id}></QuotationJobForm>);
		}
		
		if(is_owner){
			return (<QuotationsListForAdmin job_id={this.state.job.id} payer_id={this.state.job.payer.id}></QuotationsListForAdmin>)
		}
	
	}

	_render_budget(){
		let budget = "less 1000"
		if(this.state.job.budget_range == "1000_3000xrp"){
			budget = "1000 - 3000"
		}else if(this.state.job.budget_range == "3000_6000xrp"){
			budget = "3000 - 6000"
		}else if(this.state.job.budget_range == "more_10000xrp"){
			budget = "+10000"
		}

		return (<p id="budget" class="h2 text-right">
			{budget} <small class="text-muted">$XRP</small>
		</p>)
	}

    _render_job(){


        if(this.state.job == "NOT_LOADED") {
            return (<div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>);
        }else{
            return  (
            <div>
				<nav class="secondary_nav sticky_horizontal_2 mysubnav">
					<div class="container">
						<ul class="clearfix">
							<li><a href="#description" class="active">Description</a></li>
						</ul>
					</div>
				</nav>

				<div class="container margin_60_35">
						<div class="row">
							<div class="col-lg-8">
								<section id="description">
									<div class="detail_title_1">
										<h1>{this.state.job.title}</h1>
										<p class="p3">{this.state.job.payer.name}</p>
									</div>

									<p>{this.state.job.description}</p>

									<h5 class="add_bottom_15">Budget</h5>
									{this._render_budget()}
									<h5 class="add_bottom_15">Categories</h5>
									<div class="row add_bottom_30">
										<CategoriesSelector initial_categories={this.state.job.categories}></CategoriesSelector>
									</div>
					
								</section>
							</div>
						
							<QuotationAsideContactForm job_id={this.state.job.id}></QuotationAsideContactForm>
						</div>

				</div>
				{this._render_job_bottom_by_user()}
                </div>
            )
        }
       
    }

	/** <JobRow data={this.state.job}></JobRow>
        <QuotationForm job_id={this.state.job.id}></QuotationForm>
        <QuotationsListForAdmin job_id={this.state.job.id} payer_id={this.state.job.payer.id}></QuotationsListForAdmin> 
	*/

    render() {
        return (<div>
                {this._render_job()}
            </div>)
    }
}


export default JobPage;
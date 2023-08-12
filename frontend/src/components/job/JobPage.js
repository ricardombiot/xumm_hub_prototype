import { Component } from 'inferno';
import { get_job } from './../../api/api_jobs';
import JobRow from './JobRow';
//import QuotationForm  from "./../quotation/QuotationForm";
import QuotationsListForAdmin  from "./../quotation/QuotationsListForAdmin";
import QuotationAsideContactForm from '../quotation/QuotationAsideContactForm';
import QuotationJobForm from '../quotation/QuotationJobForm';
import AuthRouting from './../../components/utils/AuthRouting';

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
            console.log(job);
            this.setState({job: job})
        })
    }

	_render_job_bottom_by_user(){
		const is_owner = AuthRouting.is_owner(this.state.job.payer.id);
		const is_freelance = !is_owner;

		if(is_freelance){
			return (<QuotationJobForm job_id={this.state.job.id}></QuotationJobForm>);
		}
		

		if(is_owner){
			// @TODO pending theme list admin...
			return (<QuotationsListForAdmin job_id={this.state.job.id} payer_id={this.state.job.payer.id}></QuotationsListForAdmin>)
		}
	
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
							<li><a href="#reviews">Reviews</a></li>
							<li><a href="#sidebar">Booking</a></li>
						</ul>
											<div class="btn-group" role="group" aria-label="Basic outlined example">
							<button type="button" class="btn btn-dark">Left</button>
							<button type="button" class="btn btn-dark">Middle</button>
							<button type="button" class="btn btn-dark">Right</button>
						</div>
					</div>
				</nav>

				<div class="container margin_60_35">
						<div class="row">
							<div class="col-lg-8">
								<section id="description">
									<div class="detail_title_1">
										<h1>{this.state.job.title}</h1>
										<a class="address" href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361">438 Rush Green Road, Romford</a>
									</div>
									<p>{this.state.job.description}</p>
									<h5 class="add_bottom_15">Categories</h5>
									<div class="row add_bottom_30">
										<div class="col-md-4">
											<ul class="bullets">
												<li>Valentino</li>
												<li>Gucci</li>
												<li>Louis Vuitton</li>
												<li>Burberry</li>
											</ul>
										</div>
										<div class="col-md-4">
											<ul class="bullets">
												<li>Moschino</li>
												<li>Diesel</li>
												<li>Prada</li>
												<li>Ralph Lauren</li>
											</ul>
										</div>
										<div class="col-md-4">
											<ul class="bullets">
												<li>Moschino</li>
												<li>Diesel</li>
												<li>Prada</li>
												<li>Ralph Lauren</li>
											</ul>
										</div>
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
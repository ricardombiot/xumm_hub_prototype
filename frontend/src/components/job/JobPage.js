import { Component } from 'inferno';
import { get_job } from './../../api/api_jobs';
import JobRow from './JobRow';
import QuotationForm  from "./../quotation/QuotationForm";
import QuotationsListForAdmin  from "./../quotation/QuotationsListForAdmin";

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

    _render_job(){
        if(this.state.job == "NOT_LOADED") {
            return (<div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>);
        }else{
            return  (
        <div>
            <div>
            <nav class="secondary_nav sticky_horizontal_2" style="position: sticky;">
			<div class="container">
				<ul class="clearfix">
					<li><a href="#description" class="active">Description</a></li>
					<li><a href="#reviews">Reviews</a></li>
					<li><a href="#sidebar">Booking</a></li>
				</ul>
			</div>
		</nav>

        <div class="sub_header_in sticky_header">
            <div class="container">
                <h1>{this.state.job.title}</h1>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-dark">Left</button>
                    <button type="button" class="btn btn-dark">Middle</button>
                    <button type="button" class="btn btn-dark">Right</button>
                </div>
            </div>
        </div>

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
			
					
					<aside class="col-lg-4" id="sidebar">
						<div class="box_detail booking">
							<div class="price">
								<h5 class="d-inline">Contact us</h5>
								<div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div>
							</div>
							<div id="message-contact-detail"></div>
							<form method="post" action="assets/contact_detail.php" id="contact_detail" autocomplete="off">
								<div class="form-group">
									<input class="form-control" type="text" placeholder="Name" name="name_detail" id="name_detail"></input>
									<i class="ti-user"></i>
								</div>
								<div class="form-group">
									<input class="form-control" type="email" placeholder="Email" name="email_detail" id="email_detail"></input>
									<i class="icon_mail_alt"></i>
								</div>
								<div class="form-group">
									<textarea placeholder="Your message" class="form-control" name="message_detail" id="message_detail"></textarea>
									<i class="ti-pencil"></i>
								</div>
								<div class="form-group">
									<input placeholder="Are you human? 3 + 1 =" class="form-control" type="text" id="verify_contact_detail" name="verify_contact_detail"></input>
								</div>
								<div class="form-group">
									<input type="submit" value="Contact us" class="add_top_30 btn_1 full-width purchase" id="submit-contact-detail"></input>
								</div>
								<a href="wishlist.html" class="btn_1 full-width outline wishlist"><i class="icon_heart"></i> Add to wishlist</a>
								<div class="text-center"><small>No money charged in this step</small></div>
							</form>
						</div>
						<ul class="share-buttons">
							<li><a class="fb-share" href="#0"><i class="social_facebook"></i> Share</a></li>
							<li><a class="twitter-share" href="#0"><i class="social_twitter"></i> Share</a></li>
							<li><a class="gplus-share" href="#0"><i class="social_googleplus"></i> Share</a></li>
						</ul>
					</aside>
				</div>

		</div>

                    </div>

                    <div>
                        <JobRow data={this.state.job}></JobRow>
                        <QuotationForm job_id={this.state.job.id}></QuotationForm>
                        <QuotationsListForAdmin job_id={this.state.job.id} payer_id={this.state.job.payer.id}></QuotationsListForAdmin>
                    </div>
                </div>
            )
        }
       
    }

    render() {
        return (<div>
                {this._render_job()}
            </div>)
    }
}


export default JobPage;
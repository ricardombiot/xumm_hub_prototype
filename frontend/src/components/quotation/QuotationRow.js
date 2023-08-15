import { Component } from "inferno";
import { Link } from "inferno-router";
//import { session_is_owner } from "./../../api/api_with_auth";
import {make_quotation_approved} from "../../api/api_quotations";

export default class QuotationRow extends Component {
    constructor(props) {
        super(props)

        this.handleApprove = this.handleApprove.bind(this);
    }

    handleApprove(event){
        const { data } = this.props;
        console.log(data);
        const job_id = data.job.id;
        const quotation_id = data.id;

        make_quotation_approved(quotation_id).then((result) => {
            if(result == "Approved!"){
                window.location = "/job/" + job_id
            }else{
                console.error("Internal Error!! Ouhj");
            }
        }).catch((err) => {
            console.error(err)
        })
    }

    render(){
        const { data } = this.props; 
        const url_quotation = "/job/" + data.job.id + "/quote/" + data.id;

        /*            <div className="card text-center">
                <div className="card-header custom-background">
                    {data.destine.name} <div>TOTAL: {data.total_amount} XRP</div>
                </div>
                <div className="card-body">
                    <p className="card-text">{data.description}</p> 
                </div>
                <div className="card-footer text-muted custom-background">
                    2 days ago <Link to={url_quotation}> CHAT </Link>
                    <button onclick={this.handleApprove}>Approve</button>
                </div>
            </div>*/
        return (
            <div class="col-xl-4 col-lg-6 col-md-6 search-item">
            <div class="strip grid">
                <div class="wrapper">
                    <h4>
                    {data.total_amount}<em>XRP</em>
                    </h4>
                    <small class="name-company">{data.destine.name}</small>
                    <p class="short-description">{data.description}</p>
                </div>
                <ul>
                <li><button onclick={this.handleApprove} class="btn btn-success">Approve <i class="icon-check-1"></i></button></li>
                    <li><span class="loc_open">Open</span></li>     
                </ul>
            </div>
            </div>
        );
    }

}

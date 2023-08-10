import { Component } from "inferno";
import { Link } from "inferno-router";
//import { session_is_owner } from "./../../api/api_with_auth";

export default class QuotationRow extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        const { data } = this.props; // Recibimos el objeto Job como prop
        const url_quotation = "/job/" + data.job.id + "/quote/" + data.id;
        return (
            <div className="card text-center">
                <div className="card-header custom-background">
                    {data.destine.name} <div>TOTAL: {data.total_amount} XRP</div>
                </div>
                <div className="card-body">
                    <p className="card-text">{data.description}</p> 
                </div>
                <div className="card-footer text-muted custom-background">
                    2 days ago <Link to={url_quotation}> CHAT </Link>
                </div>
            </div>
        );
    }

}

import { Component } from "inferno";
import { Link } from "inferno-router";
import { session_is_owner } from "./../../api/api_with_auth";

export default class JobRow extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        const { data } = this.props; // Recibimos el objeto Job como prop
        const url_job = "/job/" + data.id;
        const text_owner = session_is_owner(data.payer.id) ? "(OWNER)": ""

        return (
            <div className="card text-center">
                <div className="card-header custom-background">
                    {data.title} {text_owner}
                </div>
                <div className="card-body">
                    <p className="card-text">{data.description}</p> 
                </div>
                <div className="card-footer text-muted custom-background">
                    2 days ago <Link to={url_job}> See more </Link>
                </div>
            </div>
        );
    }

}

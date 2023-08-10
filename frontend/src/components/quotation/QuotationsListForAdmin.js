import { Component } from 'inferno';
import { session_is_owner } from "./../../api/api_with_auth";

export default class QuotationsListForAdmin extends Component {
    constructor(props) {
        super(props);

        const { job_id, payer_id } = this.props;
       
        if(session_is_owner(payer_id)){
            console.log("QuotationList JobId: " + job_id + "OWNER");
        }else{
            console.log("QuotationList JobId: " + job_id + "NOT OWNER");
        }
    }

    render() {
        const { job_id, payer_id } = this.props;

        if(session_is_owner(payer_id)){
            return <div>
                Here QuotationsListForAdmin... i am OWNER... :)
            </div>
        }else{
            return []
        }
    }
}

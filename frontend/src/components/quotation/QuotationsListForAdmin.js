import { Component } from 'inferno';
import { session_is_owner } from "./../../api/api_with_auth";
import { list_quotation_by_job } from "./../../api/api_quotations";

export default class QuotationsListForAdmin extends Component {
    constructor(props) {
        super(props);

        const { job_id, payer_id } = this.props;

        this.state = {quotations: []};
       
        if(session_is_owner(payer_id)){
            console.log("QuotationList JobId: " + job_id + "OWNER");
        }else{
            console.log("QuotationList JobId: " + job_id + "NOT OWNER");
        }
    }


    componentDidMount(){
        list_quotation_by_job(this.state.job_id).then((quotations) => {
            this.setState({quotations: quotations})
        })
    }

    _render_quotes(){
        let quotes = this.state.quotations;
        let quotesElements = [];
    
        for (let index = 0; index < quotes.length; index++) {
            const quote = quotes[index];
            let html = <div>{quote.id}</div>
            quotesElements.push(html);
        }
    
        return quotesElements;
    }

    render() {
        const { job_id, payer_id } = this.props;

        if(session_is_owner(payer_id)){
            return (<div id="admin_quotations_list">
                {this._render_quotes()}
            </div>)
        }else{
            return []
        }
    }
}

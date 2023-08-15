import { Component } from 'inferno';
import { session_is_owner } from "./../../api/api_with_auth";
import { list_quotation_by_job } from "./../../api/api_quotations";
import QuotationRow from "./QuotationRow";

export default class QuotationsListForAdmin extends Component {
    constructor(props) {
        super(props);

        const { job_id, payer_id } = this.props;

        this.state = {quotations: [], job_id: job_id, payer_id: payer_id};
       
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
            let html = <QuotationRow data={quote}></QuotationRow>
            quotesElements.push(html);
        }
    
        return quotesElements;
    }

    render() {
        const { job_id, payer_id } = this.props;

        if(session_is_owner(payer_id)){
            return (<div id="admin_quotations_list">
                <div class="myform custom_bg startup">
                    <div class="sub_header_in sticky_header custom_subheader startup">
                        <div class="container">
                            <h3>Open quotations</h3>
                        </div>
                    
                    </div>
                    {this._render_quotes()}
                </div>
            </div>)
        }else{
            return []
        }
    }
}

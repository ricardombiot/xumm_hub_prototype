import { Component } from 'inferno';
import { sumbit_create_escrow, sumbit_finish_escrow } from "./../../api/api_escrow";

export default class QuotationPage extends Component {
    constructor(props) {
        super(props);
        let params = props.match.params;
        
        // @TODO LOAD QUOTATION
        // STATE = WAITING... CHECK EVERY 2 SECONDS CHECKS...

        this.state = {
            quotation: "NOT_LOADED",
            job_id: params.job_id,
            quotation_id: params.quotation_id
        };

        this.handle_submit_create_escrow = this.handle_submit_create_escrow.bind(this);
        this.handle_submit_finish_escrow = this.handle_submit_finish_escrow.bind(this);
    }

    componentDidMount(){
       /* get_job(this.state.job_id).then((job) => {
            console.log(job);
            this.setState({job: job})
        })*/
    }

    handle_submit_create_escrow(){
        sumbit_create_escrow(this.state.job_id, this.state.quotation_id)
    }

    handle_submit_finish_escrow(){
        sumbit_finish_escrow(this.state.quotation_id)
    }


    render() {
        return (<div>
                <h1>Job id: {this.state.job_id} Quote: {this.state.quotation_id}</h1>
                <button class="button" onclick={this.handle_submit_create_escrow}>Create escrow</button>
                Owner job should checks escrow.
                <button class="button" onclick={this.handle_submit_finish_escrow}>Finish escrow</button>
                </div>)
    }
}


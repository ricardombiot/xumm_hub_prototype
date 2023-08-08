import { Component } from 'inferno';

export default class QuotationPage extends Component {
    constructor(props) {
        super(props);
        let params = props.match.params;

        this.state = {
            quotation: "NOT_LOADED",
            job_id: params.job_id,
            quotation_id: params.quotation_id
        };
    }

    componentDidMount(){
       /* get_job(this.state.job_id).then((job) => {
            console.log(job);
            this.setState({job: job})
        })*/
    }

    render() {
        return (<div>
                <h1>Job id: {this.state.job_id} Quote: {this.state.quotation_id}</h1>
            </div>)
    }
}


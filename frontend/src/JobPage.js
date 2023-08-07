import { Component } from 'inferno';
import { get_job } from './api/api_jobs';
import JobRow from './JobRow';

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
            return  <JobRow data={this.state.job}></JobRow>
        }
       
    }

    render() {
        return (<div>
                <h1>Job Page: {this.state.job_id}</h1>
                {this._render_job()}
            </div>)
    }
}


export default JobPage;
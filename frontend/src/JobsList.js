import { Component } from 'inferno';
import { get_list_jobs } from './api/api_jobs';
import JobRow from './JobRow';

export default class JobsList extends Component {
    constructor(props) {
        console.log("Construct ... jobs_list")
        console.log(props)
        super(props)
        this.state = {
          data: []
        }
    }

    componentDidMount() {
        get_list_jobs()
        .then(list_jobs => {
            this.setState({ data: list_jobs });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    _render_jobs(){
        let jobs = this.state.data;
        let jobElements = [];
    
        for (let index = 0; index < jobs.length; index++) {
            const job = jobs[index];
            jobElements.push(<JobRow key={job.id} data={job}/>);
        }
    
        return jobElements;
    }

    render() {
      return <div class="m-5">
            <h1>Jobs list</h1>
            <div id="list">
            {this._render_jobs()}
            </div>
        </div>
    }
}

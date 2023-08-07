import { Component } from 'inferno';

class JobPage extends Component {
    constructor(props) {
        super(props);
        let params = props.match.params;

        this.state = {
            job_id: params.job_id 
        };
    }

    render() {
    
      return <div>
            <h1>Job Page: {this.state.job_id}</h1>
        </div>
    }
}


export default JobPage;
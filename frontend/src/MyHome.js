import { Component } from 'inferno';
import { get_list_jobs } from './api/api_jobs';
import JobsList from "./JobsList";

class MyHome extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      return <div>
            <JobsList />
        </div>
    }
}


export default MyHome;
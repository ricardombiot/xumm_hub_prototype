import { Component } from 'inferno';
import JobsList from "./components/job/JobsList";

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
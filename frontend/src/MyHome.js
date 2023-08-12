import { Component } from 'inferno';
import JobsList from "./components/job/JobsList";
import SecHomeSearch from "./components/ui/sec_home_search";
import SecHomeStartUp from "./components/ui/sec_home_startup";

class MyHome extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      return <div>
	    <main>
            <SecHomeSearch ></SecHomeSearch>
            <SecHomeStartUp></SecHomeStartUp>
            <JobsList />
        </main>
           

        </div>
    }
}


export default MyHome;
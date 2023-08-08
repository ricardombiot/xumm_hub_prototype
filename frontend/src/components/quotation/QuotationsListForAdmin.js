import { Component } from 'inferno';

export default class QuotationsListForAdmin extends Component {
    constructor(props) {
        super(props);

        const { job_id } = this.props;
        console.log("QuotationList JobId: " + job_id);
    }

    render() {
      return <div>
            Here QuotationsListForAdmin...
        </div>
    }
}

import { Component } from 'inferno';

export default class QuotationForm extends Component {
    constructor(props) {
        super(props);

        const { job_id } = this.props;
        console.log("QuotationForm JobId: " + job_id);
    }

    render() {
      return <div>
            Here QuotationForm...
        </div>
    }
}

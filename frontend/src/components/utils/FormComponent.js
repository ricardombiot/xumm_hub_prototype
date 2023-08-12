import { Component } from "inferno";

export default class FormComponent extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        console.log("... InputChange");
        console.log(this.state);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.onSubmit(this.state);
    }
}
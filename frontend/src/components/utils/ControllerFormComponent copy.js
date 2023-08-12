import { Component, Children, createVNode } from "inferno";

class ControlledFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { ...props.initialFormData }
    };
  }


  componentDidUpdate(prevProps) {
    if (prevProps.initialFormData !== this.props.initialFormData) {
      this.setState({
        formData: { ...this.props.initialFormData }
      });
    }
  }

  handleInputChange(event){
    console.log("... InputChange");
    console.log(super.state);
    const { name, value } = event.target;
    super.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.formData);
  };

}

export default ControlledFormComponent;


export default class ControlledFormComponent {
  private parent : any ;
  private onSubmit : (formData : any) => void;

  constructor(parent : any, initialFormData = {}, onSubmit = (_formData : any) => {}) {
    this.parent = parent;
    this.onSubmit = onSubmit;
    this.parent.state = {
      formData: initialFormData
    }
  }

  handleInputChange(event : any){
    console.log("... InputChange");
    console.log(this.parent.state);
    const { name, value } = event.target;
    this.parent.setState({
      formData: {
        ...this.parent.state.formData,
        [name]: value
      }
    });
  };

  handleSubmit(event : any){
    event.preventDefault();
    this.onSubmit(this.parent.state.formData);
  };

}


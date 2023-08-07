import { linkEvent, Component } from "inferno";
import { Job } from "./models/job";



export default class JobForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
          was_send: false,
          job: Job.default()
        }

        console.log(this.state);

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBudget = this.handleChangeBudget.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleChangeTitle(event) {      
      let new_job = this.state.job.clone();
      new_job.setTitle(event.target.value)
      this.setState({job: new_job});
    }

    handleChangeBudget(event) {
      let new_job = this.state.job.clone();
      new_job.setBudget(event.target.value)
      this.setState({job: new_job});
    }

    handleChangeDescription(event) {
      let new_job = this.state.job.clone();
      new_job.setDescription(event.target.value)
      this.setState({job: new_job});
    }

    handleSubmit(event) {
      this.setState({was_send: true});
      console.log(this.state.data);



      event.preventDefault();
    }
  

    render(){      
        if(this.state.was_send) {
          return (<div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>);
        }else{
          return (
            <form onSubmit={this.handleSubmit}>
            <div class="m-5">
              <h1>New Job</h1>
              <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" id="job_title" placeholder="" value={this.state.job.title} onInput={this.handleChangeTitle}></input>
              </div>
              <div class="form-group">
                <label>Budget</label>
                <select class="form-control" id="job_bugdet_range" onInput={this.handleChangeBudget}>
                  <option>less 1000 XRP</option>
                  <option selected="true">1000 - 3000 XRP</option>
                  <option>3000 - 6000 XRP</option>
                  <option>+ 10000 XRP</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect2">Categories</label>
                <p># Selector categories...</p>
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea class="form-control" id="job_description" rows="5" value={this.state.job.description} onInput={this.handleChangeDescription}></textarea>
              </div>
              <input type="submit" value="Submit" />
            </div>
            </form>
        );
        }


    }

}




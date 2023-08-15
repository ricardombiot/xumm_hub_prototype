import { Component } from 'inferno';

export default class DeltaDaysInput extends Component {
    constructor(props) {
        super(props);

        let {afterUpdate } = props;

        this.state = {
            value: "7",
            afterUpdate: afterUpdate
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let delta_days = event.target.value;
        this.setState({value: delta_days});
        this.state.afterUpdate(this.state.value);
    }

    render(){
        return ( <select 
            class="form-control" 
            name="delta_days"
            value={this.state.value || ''}
            onChange={this.handleChange}
            id="delta_days" >
              <option value="3">3 Days</option>
              <option value="7">7 Days</option>
              <option value="14">14 Days</option>
              <option value="21">21 Days</option>
        </select>)
    }


}
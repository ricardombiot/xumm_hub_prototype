import { Component } from 'inferno';

import { XRPValue } from './../../models/xrp';


export default class XRPInput extends Component {
    constructor(props) {
        super(props);

        let {label} = props;

        this.state = {
            label: label,
            amount: XRPValue.default("1.0")
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let new_amount = this.state.amount.clone();
        console.log(event.target.value);
        new_amount.trySetValueFromStr(event.target.value);
        this.setState({amount: new_amount});
    }


    render() {
        return ( 
        <div class="form-group">
            <label>Total amount</label>
            <input type="text" class="xrp-input" placeholder="0.1" value={this.state.amount.data.value_txt} onInput={this.handleChange}></input>
            <em class="xrp-input-tag">XRP</em>
            <div>{this.state.amount.data.drops}</div>
        </div>)
    }

}

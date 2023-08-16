import { Component } from 'inferno';

import { XRPValue } from './../../models/xrp';


export default class XRPInput extends Component {
    constructor(props) {
        super(props);

        let {label , afterUpdate , initial } = props;

        this.state = {
            label: label,
            amount: XRPValue.default(`${initial}`),
            afterUpdate: afterUpdate
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let new_amount = this.state.amount.clone();
        new_amount.trySetValueFromStr(event.target.value);
        this.setState({amount: new_amount});
    }

    componentDidUpdate(){
        this.state.afterUpdate(this.state.amount);
    }

    render() {
        return ( 
        <div class="xrp-input">
            <input type="text" placeholder="0.1" value={this.state.amount.data.value_txt} onInput={this.handleChange}></input>
            <em class="xrp-input-tag">XRP</em>
            <em class="xrp-input-dolars">estimation {this.state.amount.data.on_dolars} $</em>
        </div>)
    }

}

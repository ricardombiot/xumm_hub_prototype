


import { Component } from "inferno";

export default class SecHomeStartUp extends Component {
    constructor(props) {
        super(props)
    }

    render(){

return (
    <div id="startup_container" class="container-fluid margin_80_55">

    <div class="col-lg-8 mx-auto startup_bg">
        <div class="main_title_2">
            <span><em></em></span>
            <h2>You lead, you earn: No commissions on your path to success! </h2>
            <p>Launch your new project, using blockchain technology and Save up 20%!</p>
        </div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3 startup_button">Start Now</button>
        </div>
    </div>


</div>
)

    }
}
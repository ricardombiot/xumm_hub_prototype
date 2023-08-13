
import { Component } from "inferno";
import { Link } from "inferno-router";

export default class SecHomeSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ""
        }

        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleText(event){
        console.log(event);
        let text = event.target.value;

        this.setState({text: text});

        console.log(this.text);
        if(text.length > 6){
            let url = "/job/search/" + text;
            window.location = url;
        }
    }
    /*
    handleSubmit(event){
        //onSubmit={this.handleSubmit} onclick={this.handleSubmit}
        event.preventDefault();
        
        let url = "/job/search/" + this.state.text;
        window.location = url;
    }*/

    render(){
        let search_url = "/job/search/" + this.state.text;

return (	<section class="hero_single version_4">
<div class="wrapper">
    <div class="container">

        <h3>Your work, your rules, your earnings: <br></br> No commissions!</h3>
        <p>Experience instant and secure payments, and transparent interactions. Our blockchain-powered platform ensures rapid, reliable transactions and eliminates unnecessary intermediaries. Join us for a boundaryless freelance journey.</p>
        <form>
            <div class="row g-0 custom-search-input-2">
                <div class="col-lg-7">
                    <div class="form-group">
                        <input id="text_search" name="text_search" class="form-control" type="text" placeholder="What are you looking for..." onInput={this.handleText} value={this.state.text}></input>
                        <i class="icon_search"></i>
                    </div>
                </div>
                <div class="col-lg-3">
                    <select class="wide">
                        <option>All Categories</option>	
                        <option>Website Design</option>
                        <option>Speed</option>
                        <option>Smartphone</option>
                        <option>Research</option>
                        <option>Prototype</option>
                        <option>Maerketing</option>
                        <option>Design</option>
                        <option>Contract</option>
                        <option>Coding</option>
                        <option>Branding</option>
                        <option>Apps Development</option>
                        <option>Analysis</option>
                    </select>
                </div>
                <div class="col-lg-2">
                    <Link to={search_url}>
                    <input type="submit" value="Search" onSubmit={(e) => e.preventDefault()}></input></Link>
                </div>
            </div>
            
        </form>
        <ul class="counter">
            <li><strong>256,020</strong> Projects</li>
            <li><strong>150,543</strong> User</li>
            <li><strong>150,543</strong> $ save on commisions</li>
        </ul>
    </div>
</div>
</section>)
    }


}
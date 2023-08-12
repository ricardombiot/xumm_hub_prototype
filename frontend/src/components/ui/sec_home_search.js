
import { Component } from "inferno";

export default class SecHomeSearch extends Component {
    constructor(props) {
        super(props)
    }

    render(){


return (	<section class="hero_single version_4">
<div class="wrapper">
    <div class="container">

        <h3>Your work, your rules, your earnings: <br></br> No commissions!</h3>
        <p>Experience instant and secure payments, and transparent interactions. Our blockchain-powered platform ensures rapid, reliable transactions and eliminates unnecessary intermediaries. Join us for a boundaryless freelance journey.</p>
        <form method="post" action="grid-listings-filterscol.html">
            <div class="row g-0 custom-search-input-2">
                <div class="col-lg-7">
                    <div class="form-group">
                        <input class="form-control" type="text" placeholder="What are you looking for..."></input>
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
                    <input type="submit" value="Search"></input>
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
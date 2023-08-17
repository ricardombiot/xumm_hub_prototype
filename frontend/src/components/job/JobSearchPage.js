import { Component } from 'inferno';
import { get_list_jobs } from './../../api/api_jobs';
import { Link } from 'inferno-router';


export default class JobSearchPage extends Component {
    constructor(props) {
        super(props);
        let params = props.match.params;

        this.state = {
            is_loading: true,
            data: [],
            search_text: params.search
        };

    }

    componentDidMount() {
        get_list_jobs()
        .then(list_jobs => {
            this.setState({ data: list_jobs, is_loading: false });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            this.setState({is_loading: false})
        });
    }

    _render_list(){
        if(this.state.is_loading){
           return (<div class="col-xl-4 col-lg-6 col-md-6">
            Loading...
            </div>)
        }


        let jobs = this.state.data;
        let jobElements = [];
    
        for (let index = 0; index < jobs.length; index++) {
            const job = jobs[index];
            //<JobRow key={job.id} data={job}/>
            jobElements.push(this._render_item(job));
        }
    
        return jobElements;

    }

    _render_budget(job){
		let budget = "less 1000"
		if(job.budget_range == "1000_3000xrp"){
			budget = "1000 - 3000"
		}else if(job.budget_range == "3000_6000xrp"){
			budget = "3000 - 6000"
		}else if(job.budget_range == "more_10000xrp"){
			budget = "+10000"
		}

		return (<em>
			{budget} <small class="text-muted">$XRP</small>
		</em>)
	}

    _render_item(job){
        let title = job.title
        let short_description = job.description.slice(0,45) + "...";
        let url_detail = "/job/" + job.id;


        return ( <div class="col-xl-4 col-lg-6 col-md-6 search-item">
        <div class="strip grid">
            <div class="wrapper">
                <h3>
                    <Link to={url_detail}>{title}</Link>
                </h3>
                <small class="name-company">{job.payer.name}</small>
                <p class="short-description">{short_description}</p>
            </div>
            <ul>
                <li><span class="loc_open budget_on_list">
                {this._render_budget(job)}
                </span></li>
                <li><div class="score"><span>Superb<em>10 Quotes</em></span><strong>8.9</strong></div></li>
                
            </ul>
        </div>
    </div>)
    }

    render(){


return (<div id="results">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-4 col-10">
                <h4><strong>145</strong> result for All listing</h4>
            </div>
            <div class="col-lg-9 col-md-8 col-2">
                <a href="#0" class="search_mob btn_search_mobile"></a> 
                <div class="row g-0 custom-search-input-2 inner">
                    <div class="col-lg-4">
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="What are you looking for..."></input>
                                <i class="icon_search"></i>
                            </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="Where"></input>
                                <i class="icon_pin_alt"></i>
                            </div>
                    </div>
                    <div class="col-lg-3">
                        <select class="wide">
                            <option>All Categories</option>
                            <option>Shops</option>
                            <option>Hotels</option>
                            <option>Restaurants</option>
                            <option>Bars</option>
                            <option>Events</option>
                            <option>Fitness</option>
                        </select>
                    </div>
                    <div class="col-lg-1">
                        <input type="submit"></input>
                        </div>
                </div>
            </div>
        </div>
        <div class="search_mob_wp">
            <div class="custom-search-input-2">
                <div class="form-group">
                    <input class="form-control" type="text" placeholder="What are you looking for..."></input>
                        <i class="icon_search"></i>
                    </div>
                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Where"></input>
                        <i class="icon_pin_alt"></i>
                    </div>
                <select class="wide">
                    <option>All Categories</option>
                    <option>Shops</option>
                    <option>Hotels</option>
                    <option>Restaurants</option>
                    <option>Bars</option>
                    <option>Events</option>
                    <option>Fitness</option>
                </select>
                <input type="submit"></input>
                </div>
        </div>

    </div>

    <div class="filters_listing sticky_horizontal">
        <div class="container">
            <ul class="clearfix">
                <li>
                    <div class="switch-field">
                        <input type="radio" id="all" name="listing_filter" value="all" checked></input>
                            <label for="all">All</label>
                            <input type="radio" id="popular" name="listing_filter" value="popular"></input>
                                <label for="popular">Popular</label>
                                <input type="radio" id="latest" name="listing_filter" value="latest"></input>
                                    <label for="latest">Latest</label>
                                </div>
                            </li>
                            <li><a class="btn_filt" data-bs-toggle="collapse" href="#filters" aria-expanded="false" aria-controls="filters" data-text-swap="Less filters" data-text-original="More filters">More filters</a></li>
                            <li>
                                <div class="layout_view">
                                    <a href="#0" class="active"><i class="icon-th"></i></a>
                                    <a href="#0"><i class="icon-th-list"></i></a>
                                    <a href="#0"><i class="icon-map"></i></a>
                                </div>
                            </li>
                            <li>
                                <a class="btn_map" data-bs-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div class="collapse" id="collapseMap">
                    <div id="map" class="map"></div>
                </div>

                <div class="collapse" id="filters">
                    <div class="container margin_30_5">
                        <div class="row">
                            <div class="col-md-4">
                                <h6>Rating</h6>
                                <ul>
                                    <li>
                                        <label class="container_check">Superb 9+ <small>67</small>
                                            <input type="checkbox"></input>
                                                <span class="checkmark"></span>
                                            </label>
                                    </li>
                                    <li>
                                        <label class="container_check">Very Good 8+ <small>89</small>
                                            <input type="checkbox"></input>
                                                <span class="checkmark"></span>
                                            </label>
                                    </li>
                                    <li>
                                        <label class="container_check">Good 7+ <small>45</small>
                                            <input type="checkbox"></input>
                                                <span class="checkmark"></span>
                                            </label>
                                    </li>
                                    <li>
                                        <label class="container_check">Pleasant 6+ <small>78</small>
                                            <input type="checkbox"></input>
                                                <span class="checkmark"></span>
                                            </label>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <h6>Tags</h6>
                                <ul>
                                    <li>
                                        <label class="container_check">Wireless Internet <small>12</small>
                                            <input type="checkbox"></input>
                                                <span class="checkmark"></span>
                                            </label>
                                    </li>
                                    <li>
                                        <label class="container_check">Smoking Allowed <small>11</small>
                                            <input type="checkbox"></input>
                                                <span class="checkmark"></span>
                                            </label>
                                    </li>
                                    <li>
                                        <label class="container_check">Wheelchair Accesible <small>23</small>
                                            <input type="checkbox"></input>
                                                <span class="checkmark"></span>
                                            </label>
                                    </li>
                                    <li>
                                        <label class="container_check">Parking <small>56</small>
                                            <input type="checkbox"></input>
                                                <span class="checkmark"></span>
                                            </label>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <div class="add_bottom_30">
                                    <h6>Distance</h6>
                                    <div class="distance"> Radius around selected destination <span></span> km</div>
                                    <input type="range" min="10" max="100" step="10" value="30" data-orientation="horizontal"></input>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container margin_60_35">

                    <div class="row">
                        {this._render_list()}
                    </div>
                    <p class="text-center"><a href="#0" class="btn_1 rounded add_top_30">Load more</a></p>

                </div>
           </div>);

    }

}